import { Router } from "express";
import { todosController } from "./todos.controller";

const route = Router();

route.post("/", todosController.todosCreate);
route.get("/", todosController.todosGet);
route.get("/:d", todosController.todosGetSingle);
route.patch("/:id", todosController.todosUpdate);
route.delete("/:id",todosController.todosDelete)



export const todosRoute = route;
