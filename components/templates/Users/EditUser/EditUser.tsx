/* istanbul ignore file */
import type { User } from "~types";

type EditUserProps = {
  user: User | null;
};

export default function EditUser({ user }: EditUserProps): JSX.Element {
  return (
    <section>
      <h2>Edit user</h2>
      <p>{user && user.email}</p>
    </section>
  );
}
