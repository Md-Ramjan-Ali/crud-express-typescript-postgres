import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const auth = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers.authorization
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" })
        }
        try {
            const secret = process.env.SECRET as string
            const verifyToken = jwt.verify(token, secret)
            if (!verifyToken) {
                return res.status(401).json({ message: "Unauthorized" })
            }
            req.user = verifyToken as JwtPayload
            return next()
        } catch (error) {
            return res.status(401).json({ message: "Unauthorized" })
        }
    }
}

export default auth