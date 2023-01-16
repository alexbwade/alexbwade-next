/* istanbul ignore file */
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { Switch, Button, Group, TextInput, PasswordInput, Select } from "@mantine/core";
import { IconArrowNarrowLeft } from "@tabler/icons";

import { ROLES } from "~constants";
import type { User } from "~types";

import styles from "./EditUser.module.scss";

export default function EditUser(): JSX.Element {
  const router = useRouter();
  const { email } = router.query;

  const [user, setUser] = useState<User | null>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userEmail, setUserEmail] = useState(email);
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!email) return;

    const fetchUser = async (): Promise<void> => {
      const response = await fetch(`/api/users?type=get&email=${email}`);
      const data = await response.json();

      setUser(data[0]);

      if (data[0]) {
        setFirstName(data[0].first_name);
        setLastName(data[0].last_name);
        setRole(data[0].role?.name);
      }
    };

    fetchUser();
  }, [email]);

  if (!user) return <p>Loading...</p>;

  const handleChangeFirstName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFirstName(event.target.value);
  };

  const handleChangeLastName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setLastName(event.target.value);
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserEmail(event.target.value);
  };

  const handleChangeRole = (value: string | null): void => {
    setRole(value || "");
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  return (
    <section id="create" className={styles.wrapper}>
      <Link href="/users">
        <Button className={styles.backButton} leftIcon={<IconArrowNarrowLeft />} variant="white">
          Back
        </Button>
      </Link>
      <TextInput label="Email" type="text" name="email" value={userEmail} onChange={handleChangeEmail} withAsterisk />
      <PasswordInput
        name="password"
        value={password}
        onChange={handleChangePassword}
        placeholder="Your password"
        label="Password"
        required
        withAsterisk
      />
      <Group spacing="sm">
        <TextInput
          name="first_name"
          label="First name"
          type="text"
          value={firstName}
          onChange={handleChangeFirstName}
        />
        <TextInput label="Last name" type="text" name="last_name" value={lastName} onChange={handleChangeLastName} />
      </Group>
      <Group spacing="sm">
        <Select label="Role" data={Object.values(ROLES)} value={role} onChange={handleChangeRole} />
      </Group>
      <Switch label="Disable account" checked={user.disabled} />
    </section>
  );
}
