/* eslint-disable */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { getUsers, updateUser, deleteUser, createUser } from "~db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let result;
  switch (req.query.type) {
    case "create":
      result = await createUser(req.body);
      break;
    case "update":
      result = await updateUser(req.body);
      break;
    case "delete":
      result = await deleteUser(req.body);
      break;
    default:
      result = await getUsers();
  }

  res.status(200).json(result);
}
