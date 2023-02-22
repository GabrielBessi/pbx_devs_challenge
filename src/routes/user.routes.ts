import { Router } from "express";
import { getUserController } from "../controller/user.controller";

const userRouter = Router();

userRouter.get("", getUserController);

export default userRouter;
