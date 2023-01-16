select User {
  name,
  first_name,
  last_name,
  email,
  disabled,
  role: {
    name
  },
  settings: {
    salutation
  }
}
filter .email = <str>$email;
