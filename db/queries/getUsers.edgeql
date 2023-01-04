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
order by
  .name asc then
  .email asc;
