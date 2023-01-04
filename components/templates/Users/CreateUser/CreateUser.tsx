/* istanbul ignore file */
import { Button, TextInput, PasswordInput } from "@mantine/core";
import { IconUserPlus, IconArrowNarrowLeft } from "@tabler/icons";

import { fetchJson } from "~utils";

import styles from "./CreateUser.module.scss";

type CreateUserProps = {
  setFetchCount: React.Dispatch<React.SetStateAction<number>>;
  setCreatingUser: React.Dispatch<React.SetStateAction<boolean>>;
};

type FormValues = {
  first_name: { value: string };
  last_name: { value: string };
  email: { value: string };
  password: { value: string };
};

export default function CreateUser(props: CreateUserProps): JSX.Element {
  const { setFetchCount, setCreatingUser } = props;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const target = e.target as typeof e.target & FormValues;

    await fetchJson("/api/users?type=create", {
      method: "POST",
      body: JSON.stringify({
        first_name: target.first_name.value,
        last_name: target.last_name.value,
        email: target.email.value,
        password: target.password.value,
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
        <TextInput label="First name" placeholder="Thomas" type="text" name="first_name" />
        <TextInput label="Last name" placeholder="Jefferson" type="text" name="last_name" />
        <TextInput
          label="Email"
          // placeholder="thomasj@gmail.com"
          // icon={<IconAt size={14} />}
          type="text"
          name="email"
          withAsterisk
        />
        <PasswordInput name="password" label="Password" withAsterisk />
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
