import db from "~db";

async function run() {
  await db.execute(`
    insert User {
      first_name := "John",
      last_name := "Doe",
      email := "idk@test.com"
    };`);

  console.log("Seeds added.");
}

run();
