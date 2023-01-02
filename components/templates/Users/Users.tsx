/* istanbul ignore file */
import * as React from "react";
import { useFetchJson } from "~hooks";
import { fetchJson } from "~utils";

import styles from "./Users.module.scss";

export default function Users() {
  const [fetchCount, setFetchCount] = React.useState(0);
  const { data, loading, error } = useFetchJson("/api/users", { dependencies: [fetchCount] });
  console.log(data);

  const handleDeleteUser = async (email: string) => {
    const result = await fetchJson("/api/users?type=delete", {
      method: "POST",
      body: JSON.stringify({ email }),
    });
    setFetchCount(fetchCount + 1);
    console.log(result);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      first_name: { value: string };
      last_name: { value: string };
      email: { value: string };
      password: { value: string };
    };
    const body = {
      first_name: target.first_name.value,
      last_name: target.last_name.value,
      email: target.email.value,
      password: target.password.value,
    };
    const result = await fetchJson("/api/users?type=create", {
      method: "POST",
      body: JSON.stringify(body),
    });
    console.log(result);
    setFetchCount(fetchCount + 1);
  };

  return (
    <div className={styles.wrapper}>
      <h1>Users</h1>
      <section id="list">
        <h2>Existing users</h2>
        {error ? <p>{error}</p> : null}
        {loading ? <p>Loading...</p> : null}
        {data && data.length ? (
          <ul>
            {data.map((user) => (
              <li key={user.email}>
                <strong>{user.name}</strong> ({user.email}) <button>Update</button>
                <button onClick={() => handleDeleteUser(user.email)}>Delete</button>
              </li>
            ))}
          </ul>
        ) : null}
      </section>
      <section id="create">
        <h2>Create user</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="first_name">First name</label>
          <input type="text" name="first_name" />
          <label htmlFor="last_name">Last name</label>
          <input type="text" name="last_name" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
          <button type="submit">Create</button>
        </form>
      </section>
    </div>
  );
}
