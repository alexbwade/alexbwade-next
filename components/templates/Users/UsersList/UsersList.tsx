/* istanbul ignore file */
import Link from "next/link";
import { Avatar, Badge, Table, Group, Text, ActionIcon, Anchor, ScrollArea } from "@mantine/core";
import { IconPencil, IconTrash } from "@tabler/icons";

import { useFetchJson } from "~hooks";
import { fetchJson } from "~utils";

type UsersListProps = {
  fetchCount: number;
  setFetchCount: React.Dispatch<React.SetStateAction<number>>;
};

export default function UsersList(props: UsersListProps): JSX.Element {
  const { fetchCount, setFetchCount } = props;

  const res = useFetchJson("/api/users", {
    dependencies: [fetchCount],
  });
  const users = res.data;

  const handleDeleteUser = async (email: string): Promise<void> => {
    if (!window.confirm(`Are you sure you want to delete the following user?\n\n${email}`)) {
      return;
    }
    await fetchJson("/api/users?type=delete", {
      method: "POST",
      body: JSON.stringify({ email }),
    });

    setFetchCount((prev) => prev + 1);
  };

  if (res.loading) {
    return <p>Loading...</p>;
  }

  if (res.error) {
    return <p>{res.error}</p>;
  }

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
        <thead>
          <tr>
            <th>User</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th />
          </tr>
        </thead>
        {users && Array.isArray(users) && users.length ? (
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.name}>
                  <td>
                    <Group spacing="sm">
                      <Avatar size={30} src={user.avatar} radius={30} />
                      <Text size="sm" weight={500}>
                        {user.name}
                      </Text>
                    </Group>
                  </td>
                  <td>
                    <Anchor<"a"> size="sm" href="#" onClick={(event) => event.preventDefault()}>
                      {user.email}
                    </Anchor>
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
                      <Link href={`/users/edit/${user.email}`}>
                        <ActionIcon>
                          <IconPencil size={18} stroke={1.5} />
                        </ActionIcon>
                      </Link>
                      <ActionIcon color="red" onClick={() => handleDeleteUser(user.email)}>
                        <IconTrash size={18} stroke={1.5} />
                      </ActionIcon>
                    </Group>
                  </td>
                </tr>
              );
            })}
          </tbody>
        ) : null}
      </Table>
    </ScrollArea>
  );
}
