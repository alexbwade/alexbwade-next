/* istanbul ignore file */
import type { User } from "~types";
import { Button } from "@mantine/core";
import { IconArrowNarrowLeft } from "@tabler/icons";

import styles from "./EditUser.module.scss";

type EditUserProps = {
  user: User | null;
  setUserToEdit: React.Dispatch<React.SetStateAction<User | null>>;
};

export default function EditUser(props: EditUserProps): JSX.Element {
  const { user, setUserToEdit } = props;

  return (
    <section>
      <header className={styles.header}>
        <h2>Editing {user && (user.name || user.email)}</h2>
        <Button
          leftIcon={<IconArrowNarrowLeft />}
          onClick={() => setUserToEdit(null)}
          variant="white"
          color="#ec8c69"
          style={{ color: "#ec8c69" }}
        >
          Back
        </Button>
      </header>

      <p>{user && user.email}</p>
    </section>
  );
}
