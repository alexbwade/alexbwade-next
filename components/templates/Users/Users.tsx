/* istanbul ignore file */
import { useState } from "react";
import { Button, Divider } from "@mantine/core";
import { IconUserPlus, IconArrowsShuffle } from "@tabler/icons";

import type { User } from "~types";

import UsersList from "./UsersList";
import CreateUser from "./CreateUser";
import EditUser from "./EditUser";

import styles from "./Users.module.scss";

export default function Users(): JSX.Element {
  const [fetchCount, setFetchCount] = useState(0);
  const [userToEdit, setUserToEdit] = useState<User | null>(null);
  const [creatingUser, setCreatingUser] = useState(false);

  const handleShowCreateUser = () => {
    setCreatingUser(true);
  };

  const handleCreateRandomUser = async () => {
    await fetch("/api/users?type=create-random", {
      method: "POST",
    });
  };

  return (
    <div className={styles.wrapper}>
      <h1>Users</h1>
      <UsersList fetchCount={fetchCount} setFetchCount={setFetchCount} setUserToEdit={setUserToEdit} />
      {userToEdit ? <EditUser user={userToEdit} setUserToEdit={setUserToEdit} /> : null}
      <Divider style={{ marginBottom: "20px" }} />
      {creatingUser ? (
        <CreateUser setFetchCount={setFetchCount} setCreatingUser={setCreatingUser} />
      ) : (
        <div className={styles.buttons}>
          <Button
            leftIcon={<IconArrowsShuffle />}
            onClick={handleCreateRandomUser}
            variant="white"
            color="#ec8c69"
            style={{ marginLeft: "10px", color: "#ec8c69" }}
          >
            Create test user
          </Button>
          <Button
            leftIcon={<IconUserPlus />}
            variant="gradient"
            gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
            onClick={handleShowCreateUser}
          >
            Create user
          </Button>
        </div>
      )}
    </div>
  );
}
