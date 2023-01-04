select User {
  name,
  first_name,
  last_name,
  email,
  role,
  settings: {
    salutation
  }
}
order by
  .name asc then
  .email asc;
