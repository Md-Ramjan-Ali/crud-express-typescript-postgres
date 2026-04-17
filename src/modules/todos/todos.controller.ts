import { Request, Response } from "express";
import { todosServices } from "./todos.service";

const todosCreate = async (req: Request, res: Response) => {
  const { user_id, title } = req.body;

  try {
    const result = await todosServices.todosCreate(Number(user_id), title);
    res.status(201).json({
      success: true,
      message: "todos fetch successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const todosGet = async (req: Request, res: Response) => {
  const result = await todosServices.todosGet();
  try {
    res.status(201).json({
      success: true,
      message: "todos get successfully",
      data: result.rows,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: "something is wrong",
    });
  }
};

const todosGetSingle = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const result = await todosServices.todosGetSingle(id);
  try {
    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "todos not found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "todos fetch successfully",
        data: result.rows,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something is worng",
    });
  }
};

const todosUpdate = async (req: Request, res: Response) => {
  const { title } = req.body;
  try {
    const result = await todosServices.todosUpdate(
      title,
      req.params.id as string,
    );
    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "todos not found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "todos fetch successfully",
        data: result.rows[0],
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: true,
      message: error.message,
    });
  }
};

const todosDelete = async (req: Request, res: Response) => {
  const result = await todosServices.todosDelete(req.params.id as string);
  try {
    if (result.rowCount === 0) {
      res.status(404).json({
        success: false,
        message: "todos not found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "todos delete successfully",
        data: null,
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const todosController = {
  todosCreate,
  todosGet,
  todosGetSingle,
  todosUpdate,
  todosDelete,
};
