update User
filter .email = <str>$email
set {
  updated_at: = <datetime>datetime_current()
};