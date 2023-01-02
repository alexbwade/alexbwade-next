update User
filter .email = <str>$email
set {
  first_name := <str>$first_name,
  last_name := <str>$last_name,
  updated_at: = <datetime>datetime_current()
};