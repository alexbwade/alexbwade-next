/* istanbul ignore file */
import { useEffect } from "react";

import { Badge, Group, TextInput, ActionIcon } from "@mantine/core";
import { IconPencil, IconTrash } from "@tabler/icons";

import type { User } from "~types";

type EditUserProps = {
  user: User;
  setUserToEdit: React.Dispatch<React.SetStateAction<User | null>>;
};

export default function EditUser(props: EditUserProps): JSX.Element {
  const { user, setUserToEdit } = props;

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        setUserToEdit(null);
      }
    };
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <tr key={user.name}>
      <td>
        <Group spacing="sm">
          <TextInput label="First name" type="text" name="first_name" value={user.first_name} />
          <TextInput label="Last name" type="text" name="last_name" value={user.last_name} />
        </Group>
      </td>
      <td>
        <TextInput label="Email" type="text" name="email" value={user.email} withAsterisk />
      </td>
      <td>{user.role?.name}</td>
      <td>
        {user.disabled ? (
          <Badge color="gray" fullWidth>
            Disabled
          </Badge>
        ) : (
          <Badge fullWidth>Active</Badge>
        )}
      </td>
      <td>
        <Group spacing={0} position="right">
          <ActionIcon style={{ visibility: "hidden" }}>
            <IconPencil size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon color="red">
            <IconTrash size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  );

  // return (
  //   <section>
  //     <header className={styles.header}>
  //       <h2>Editing {user.name || user.email}</h2>
  //       <Button
  //         leftIcon={<IconArrowNarrowLeft />}
  //         onClick={() => setUserToEdit(null)}
  //         variant="white"
  //         color="#ec8c69"
  //         style={{ color: "#ec8c69" }}
  //       >
  //         Back
  //       </Button>
  //     </header>

  //     <Select data={Object.values(ROLES)} defaultValue={user.role?.name} variant="unstyled" />

  //     <p>{user.email}</p>

  //   </section>
  // );
}