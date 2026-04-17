import { Router } from "express";
import { userControllers } from "./user.controller";

const router = Router();

//user CRUD
router.post("/", userControllers.createUser);
router.get("/", userControllers.userGet);
router.get("/:id", userControllers.userGetDetails);
router.patch("/:id", userControllers.userUpdate);
router.delete("/:id", userControllers.userDelete);

export const userRoute = router;
