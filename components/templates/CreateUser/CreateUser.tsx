/* istanbul ignore file */
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Progress, Button, TextInput, PasswordInput, Group, Text, Center } from "@mantine/core";
import { useInputState } from "@mantine/hooks";
import { IconCheck, IconX, IconUserPlus, IconArrowNarrowLeft } from "@tabler/icons";

import { fetchJson } from "~utils";

import styles from "./CreateUser.module.scss";

type FormValues = {
  email: { value: string };
  password: { value: string };
  first_name: { value: string };
  last_name: { value: string };
};

function PasswordRequirement({ meets, label }: { meets: boolean; label: string }) {
  return (
    <Text color={meets ? "teal" : "red"} mt={5} size="sm">
      <Center inline>
        {meets ? <IconCheck size={14} stroke={1.5} /> : <IconX size={14} stroke={1.5} />}
        <Box ml={7}>{label}</Box>
      </Center>
    </Text>
  );
}

const requirements = [
  { re: /[0-9]/, label: "Includes number" },
  { re: /[a-z]/, label: "Includes lowercase letter" },
  { re: /[A-Z]/, label: "Includes uppercase letter" },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" },
];

function getStrength(password: string) {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 0);
}

export default function CreateUser(): JSX.Element {
  const [value, setValue] = useInputState("");

  const router = useRouter();

  const strength = getStrength(value);
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(value)} />
  ));
  const bars = Array(4)
    .fill(0)
    .map((_, index) => (
      <Progress
        styles={{ bar: { transitionDuration: "0ms" } }}
        value={value.length > 0 && index === 0 ? 100 : strength >= ((index + 1) / 4) * 100 ? 100 : 0}
        color={strength > 80 ? "teal" : strength > 50 ? "yellow" : "red"}
        key={index}
        size={4}
      />
    ));

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
      }),
    });

    router.push("/users");
  };

  return (
    <section id="create" className={styles.wrapper}>
      <Link href="/users">
        <Button className={styles.backButton} leftIcon={<IconArrowNarrowLeft />} variant="white">
          Back
        </Button>
      </Link>

      <header className={styles.header}>
        <h2>Create user</h2>
      </header>

      <form onSubmit={handleSubmit}>
        <TextInput label="Email" type="text" name="email" withAsterisk />
        {/* <PasswordInput name="password" label="Password" withAsterisk /> */}
        <div>
          <PasswordInput
            name="password"
            value={value}
            onChange={setValue}
            placeholder="Your password"
            label="Password"
            required
            withAsterisk
          />

          <Group spacing={5} grow mt="xs" mb="md">
            {bars}
          </Group>

          <PasswordRequirement label="Has at least 6 characters" meets={value.length > 5} />
          {checks}
        </div>
        <TextInput label="First name" placeholder="Thomas" type="text" name="first_name" />
        <TextInput label="Last name" placeholder="Jefferson" type="text" name="last_name" />
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
