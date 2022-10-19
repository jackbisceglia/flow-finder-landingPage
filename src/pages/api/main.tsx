import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const handler: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.body);

  res.send({ message: "testing" });
};

export default handler;
