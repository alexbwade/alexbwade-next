import { createClient } from "edgedb";
import type { Executor } from "edgedb";

import { getUsersQuery, createUserQuery, deleteUserQuery, updateUserQuery } from "./queries";

const client = createClient();

function createDbQuery(dbClient: Executor, dbQuery: string) {
  return async function runQuery(params?: Record<string, unknown>) {
    return dbClient.query(dbQuery, params);
  };
}

export const getUsers = createDbQuery(client, getUsersQuery);
export const createUser = createDbQuery(client, createUserQuery);
export const updateUser = createDbQuery(client, updateUserQuery);
export const deleteUser = createDbQuery(client, deleteUserQuery);

// export async function connect() {
//   await client.connect({
//     dsn: "edgedb://edgedb:edgedb@localhost:5656/edgedb",
//   });
// }

export default client;
