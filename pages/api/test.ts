/* eslint-disable */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { createClient } from "edgedb";

const client = createClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // const result: string | number | null = await client.querySingle(`select random()`);

  const result = await client.querySingle(`select User {
    password,
    email,
    id,
    name,
    settings: {
      salutation
    }}`);

  res.status(200).json(result);
}
