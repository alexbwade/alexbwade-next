import { createClient } from "edgedb";

const db = createClient();

async function run() {
  // Permissions
  await db.execute(`
    with permissions := <json>["super", "all", "edit:self", "view:public", "view:self"],
    for permission_name in json_array_unpack(permissions) union (
      insert Permission { name := <str>permission_name } unless conflict on .name
    );
  `);

  // Roles
  await db.execute(`
    insert Role {
      name := "Super Admin",
      permissions := (
        select Permission filter .name = 'super'
      )
    } unless conflict on .name;

    insert Role {
      name := "Admin",
      permissions := (
        select Permission filter .name = 'all'
      )
    } unless conflict on .name;

    insert Role {
      name := "Member",
      permissions := (
        select Permission filter .name in {'view:public', 'view:self', 'edit:self'}
      )
    } unless conflict on .name;

    insert Role {
      name := "Guest",
      permissions := (
        select Permission filter .name = 'view:public'
      )
    } unless conflict on .name;
  `);

  // Users
  await db.execute(`
    with role := (
      select Role filter .name = 'Super Admin'
    )
    insert User {
      first_name := "Alex",
      last_name := "Wade",
      email := "alexbwade@gmail.com",
      role := role,
      password := "lkasdldfkjasd"
    } unless conflict on .email;
  `);

  await db.execute(`
    with role := (
      select Role filter .name = 'Admin'
    )
    insert User {
      first_name := "Karelly",
      last_name := "Ramirez",
      email := "karellyrmg@gmail.com",
      role := role,
      password := "lkasdldfkjasd"
    } unless conflict on .email;
  `);

  console.log("Seeds added.");
}

run();
