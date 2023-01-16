/* eslint-disable */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { createUser } from "~db";

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

type CreateUserResultId = string | null;

export default async function handler(req: NextApiRequest, res: NextApiResponse<CreateUserResultId>) {
  const params = getSanitizedParams(req.body);

  const result = (await createUser(params)) as unknown as CreateUserResultId;

  res.status(200).json(result);
}
