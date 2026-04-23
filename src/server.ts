import app from "./app";
import initDB from "./config/db";


const port = process.env.PORT || 5000;

const runServer = async () => {
  await initDB();
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
};
runServer();