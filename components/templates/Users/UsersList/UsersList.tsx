/* istanbul ignore file */
import { useFetchJson } from "~hooks";
import { fetchJson } from "~utils";
import type { User } from "~types";

type UsersListProps = {
  fetchCount: number;
  setFetchCount: React.Dispatch<React.SetStateAction<number>>;
  setUserToEdit: React.Dispatch<React.SetStateAction<User | null>>;
};

export default function UsersList(props: UsersListProps): JSX.Element {
  const { fetchCount, setFetchCount, setUserToEdit } = props;

  const res = useFetchJson("/api/users", {
    dependencies: [fetchCount],
  });
  const users = res.data;

  const handleDeleteUser = async (email: string): Promise<void> => {
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
    <section id="list">
      <h2>Existing users</h2>
      {users && Array.isArray(users) && users.length ? (
        <ul>
          {users.map((user) => (
            <li key={user.email}>
              <strong>{user.name}</strong> ({user.email}) <button onClick={() => setUserToEdit(user)}>Update</button>
              <button onClick={() => handleDeleteUser(user.email)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
