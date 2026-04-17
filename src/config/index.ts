import dotenv from "dotenv";
dotenv.config();

const configFile = {
  connection_str: process.env.DATABSE_URL!,
  port: process.env.PORT,
};

export default configFile;
