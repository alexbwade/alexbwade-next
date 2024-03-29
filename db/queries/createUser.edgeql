insert User {
  email := <str>$email,
  password := <str>$password,
  first_name := <optional str>$first_name ?? '',
  last_name := <optional str>$last_name ?? '',
  role := (
    select Role filter .name = 'Member'
  )
}
unless conflict on .email;
