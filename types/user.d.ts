interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  first_name: string;
  last_name: string;
  role: {
    name: string;
  };
  disabled: boolean;
}

export default User;
