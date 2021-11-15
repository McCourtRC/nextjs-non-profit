import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

type Data = {
  name: string;
};

type Error = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  const session = await getSession({ req });
  if (!session) {
    return res.status(403).send({ error: 'Must be signed in' });
  }

  res.status(200).json({ name: 'John Doe' });
}
