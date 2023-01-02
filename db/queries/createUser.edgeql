# with
#   fields := <json>$fields,
#   insert User {
#     for (name, value) in json_object_unpack(fields) union (
#       name := <str>value
#     );
#   };
# unless conflict on .email


# insert User {
#   email := <str>$email,
#   password := <str>$password,
#   first_name := <str>$first_name,
#   last_name := <str>$last_name,
# };

insert User {
  email := <str>$email,
  password := <str>$password,
  first_name := <optional str>$first_name ?? '',
  last_name := <optional str>$last_name ?? '',
}
unless conflict on .email;