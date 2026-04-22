import { Request, Response } from "express";
import { authServices } from "./auth.service";

const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        const result = await authServices.loginUser(email, password)
        if (result) {
            res.status(200).json({
                success: true,
                message: "User logged in successfully",
                data: result
            })
        } else {
            res.status(401).json({
                success: false,
                message: "Invalid credentials",
            })
        }
    } catch (error:any) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

export const authController = {
    loginUser
}