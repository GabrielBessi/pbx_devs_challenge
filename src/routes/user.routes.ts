import { Router, Request, Response } from "express";
import sequelize from "../data-source";

const userRouter = Router();

userRouter.get("", async (req: Request, res: Response) => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});

export default userRouter;
