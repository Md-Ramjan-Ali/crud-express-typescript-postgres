import dotenv from "dotenv";
dotenv.config();

const configFile = {
  connection_str: process.env.DATABASE_URL!,
  port: process.env.PORT,
  secret: process.env.SECRET,
};

export default configFile;
