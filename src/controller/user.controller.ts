import { Request, Response } from "express";
import getUserServices from "../services/user.services";

const getUserController = async (req: Request, res: Response) => {
  const user = await getUserServices();

  return res.json(user);
};

export { getUserController };
