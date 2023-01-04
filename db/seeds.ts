import db from "~db";

async function run() {
  await db.execute(`
    insert User {
      first_name := "Alex",
      last_name := "Wade",
      email := "idk@test.com",
      password := "??"
    };`);

  console.log("Seeds added.");
}

run();
