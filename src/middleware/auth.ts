import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const auth = (...roles:string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers.authorization
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" })
        }
        try {
            const secret = process.env.SECRET as string
            const verifyToken = jwt.verify(token, secret) as JwtPayload
            if (!verifyToken) {
                return res.status(401).json({ message: "Unauthorized" })
            }
            req.user = verifyToken 
            if (roles.length > 0 && !roles.includes(verifyToken.role as string)) {
                return res.status(403).json({ message: "Forbidden" })
            }
            return next()
        } catch (error) {
            return res.status(401).json({ message: "Unauthorized" })
        }
    }
}

export default auth