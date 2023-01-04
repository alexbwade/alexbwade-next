/* istanbul ignore file */
import { Button, Select, TextInput, PasswordInput } from "@mantine/core";
import { IconUserPlus, IconArrowNarrowLeft } from "@tabler/icons";
import { ROLES } from "~constants";

import { fetchJson } from "~utils";

import styles from "./CreateUser.module.scss";

type CreateUserProps = {
  setFetchCount: React.Dispatch<React.SetStateAction<number>>;
  setCreatingUser: React.Dispatch<React.SetStateAction<boolean>>;
};

type FormValues = {
  email: { value: string };
  password: { value: string };
  first_name: { value: string };
  last_name: { value: string };
  role: { value: string };
};

export default function CreateUser(props: CreateUserProps): JSX.Element {
  const { setFetchCount, setCreatingUser } = props;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const target = e.target as typeof e.target & FormValues;

    await fetchJson("/api/users?type=create", {
      method: "POST",
      body: JSON.stringify({
        email: target.email.value,
        password: target.password.value,
        first_name: target.first_name.value,
        last_name: target.last_name.value,
        role: target.role.value,
      }),
    });

    setFetchCount((prev) => prev + 1);
  };

  return (
    <section id="create">
      <header className={styles.header}>
        <h2>Create user</h2>
        <Button
          leftIcon={<IconArrowNarrowLeft />}
          onClick={() => setCreatingUser(false)}
          variant="white"
          color="#ec8c69"
          style={{ color: "#ec8c69" }}
        >
          Back
        </Button>
      </header>

      <form onSubmit={handleSubmit}>
        <TextInput label="Email" type="text" name="email" withAsterisk />
        <PasswordInput name="password" label="Password" withAsterisk />
        <TextInput label="First name" placeholder="Thomas" type="text" name="first_name" />
        <TextInput label="Last name" placeholder="Jefferson" type="text" name="last_name" />
        <Select label="Role" name="role" data={Object.values(ROLES)} defaultValue={ROLES.GUEST} />
        <div className={styles.buttons}>
          <Button
            leftIcon={<IconUserPlus />}
            variant="gradient"
            gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
            type="submit"
          >
            Create
          </Button>
        </div>
      </form>
    </section>
  );
}
