import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";

const p = new PrismaClient();

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "POST") {
    const body = JSON.parse(req.body);
    if (!body || !body.email) {
      res.status(400).json({ message: "Missing email" });
      return;
    }

    try {
      const resource = await p.signUp.create({
        data: {
          email: body.email,
        },
      });

      if (!resource) {
        res.send({ error: "Already Signed Up" });
        return;
      } else {
        res.send({ resource });
        return;
      }
    } catch (error) {
      res.send({ error });
    }
  }
};

export default handler;
