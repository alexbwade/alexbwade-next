/* eslint-disable */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { createClient } from "edgedb";

const client = createClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const result: string | number | null = await client.querySingle(`select random()`);

  res.status(200).json(result);
}
