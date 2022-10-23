import  express  from "express";
import { getUserController,addUserController } from "../controller/userController.js";
const userRouter = express.Router();
userRouter.get("/getusers",getUserController);
userRouter.post("/addusers",addUserController);

export default userRouter;
