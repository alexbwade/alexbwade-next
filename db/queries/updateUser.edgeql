with params := json_array_unpack(<json>$params),
update User
filter .email = <str>$email
set params union {
  updated_at: = <datetime>datetime_current()
};