/* istanbul ignore file */
import Link from "next/link";
import { useState } from "react";
import { Button, Divider } from "@mantine/core";
import { IconUserPlus, IconArrowsShuffle } from "@tabler/icons";

import UsersList from "./UsersList";

import styles from "./Users.module.scss";

export default function Users(): JSX.Element {
  const [fetchCount, setFetchCount] = useState(0);

  const handleCreateRandomUser = async () => {
    await fetch("/api/users?type=create-random", {
      method: "POST",
    });
  };

  return (
    <div className={styles.wrapper}>
      <h1>Users</h1>
      <UsersList fetchCount={fetchCount} setFetchCount={setFetchCount} />
      <Divider style={{ marginBottom: "20px" }} />
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
        <Link href="/users/create">
          <Button
            leftIcon={<IconUserPlus />}
            variant="gradient"
            gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
            // onClick={handleShowCreateUser}
          >
            Create user
          </Button>
        </Link>
      </div>
    </div>
  );
}
