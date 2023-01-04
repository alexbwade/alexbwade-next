/* istanbul ignore file */
import { useState } from "react";

import type { User } from "~types";

import UsersList from "./UsersList";
import CreateUser from "./CreateUser";
import EditUser from "./EditUser";

import styles from "./Users.module.scss";

export default function Users(): JSX.Element {
  const [fetchCount, setFetchCount] = useState(0);
  const [userToEdit, setUserToEdit] = useState<User | null>(null);
  const [creatingUser, setCreatingUser] = useState(false);

  const handleClick = () => {
    setCreatingUser(true);
  };

  return (
    <div className={styles.wrapper}>
      <h1>Users</h1>
      <UsersList fetchCount={fetchCount} setFetchCount={setFetchCount} setUserToEdit={setUserToEdit} />
      {userToEdit ? <EditUser user={userToEdit} /> : null}
      {creatingUser ? <CreateUser setFetchCount={setFetchCount} /> : <button onClick={handleClick}>Create user</button>}
    </div>
  );
}
