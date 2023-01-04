import { fetchJson } from "~utils";

type CreateUserProps = {
  setFetchCount: React.Dispatch<React.SetStateAction<number>>;
};

type FormValues = {
  first_name: { value: string };
  last_name: { value: string };
  email: { value: string };
  password: { value: string };
};

export default function CreateUser({ setFetchCount }: CreateUserProps) {
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
  );
}
