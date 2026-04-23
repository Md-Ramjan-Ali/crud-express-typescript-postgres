import { Router } from "express";
import { userControllers } from "./user.controller";
import auth from "../../middleware/auth";
import logger from "../../middleware/logger";
const router = Router();

//user CRUD
router.post("/", userControllers.createUser);
router.get("/", logger, auth("admin", "user"), userControllers.userGet);
router.get(
  "/:id",
  logger,
  auth("admin", "user"),
  userControllers.userGetDetails,
);
router.patch("/:id", logger, auth("admin", "user"), userControllers.userUpdate);
router.delete(
  "/:id",
  logger,
  auth("admin", "user"),
  userControllers.userDelete,
);

export const userRoute = router;
