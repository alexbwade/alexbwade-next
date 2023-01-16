/* eslint-disable */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";

import { getUsers, updateUser, deleteUser, createUser, getUserByEmail } from "~db";

function getSanitizedParams(requestBody: Record<string, string>) {
  const params: Record<string, string> = {};
  for (const [key, value] of Object.entries(requestBody)) {
    if (value === null || value === undefined || value.trim() === "") {
      continue;
    }
    if (typeof value === "string") {
      params[key] = value.trim();
    }
  }

  return params;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let result;
  const params = getSanitizedParams(req.body);

  if (params.password) {
    params.password = await bcrypt.hash(params.password, 10);
  }

  switch (req.query.type) {
    case "create":
      result = await createUser(params);
      break;
    case "update":
      result = await updateUser(params);
      break;
    case "delete":
      result = await deleteUser(params);
      break;
    case "get":
      const { email } = req.query;
      result = await getUserByEmail({ email });
      break;
    default:
      result = await getUsers();
  }

  res.status(200).json(result);
}
