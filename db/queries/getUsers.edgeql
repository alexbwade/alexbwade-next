select User {
  name,
  email,
  role,
  settings: {
    salutation
  }
}
order by
  .name asc then
  .email asc;
