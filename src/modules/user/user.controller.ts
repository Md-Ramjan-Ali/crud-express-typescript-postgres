import { Request, Response } from "express";
import { pool } from "../../config/db";
import { userServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  const { name, email, age, phone, address } = req.body;

  try {
    const result = await userServices.createUser({
      name,
      email,
      age,
      phone,
      address,
    });
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const userGet = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getUser();
    res.status(201).json({
      success: true,
      message: "user fatch successfully",
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const userGetDetails = async (req: Request, res: Response) => {
  try {
    // const id = req.params.id as string
    const result = await userServices.getUserDetails(req.params.id as string);
    if (result.rows.length === 0) {
      res.status(404).json({
        success: true,
        message: "user not found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "user fatch successfully",
        data: result.rows[0],
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
const userUpdate = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const id = req.params.id as string;
  const result = await userServices.userUpdate({ id, name, email });
  try {
    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "users not found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "user update successfully",
        data: result.rows[0],
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const userDelete = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const result = await userServices.userDelete(id);
  try {
    if (result.rowCount === 0) {
      res.status(404).json({
        success: false,
        message: "user not found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Delete User Successfully",
        data: null,
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: true,
      message: error.message,
    });
  }
};

export const userControllers = {
  createUser,
  userGet,
  userGetDetails,
  userUpdate,
  userDelete,
};
