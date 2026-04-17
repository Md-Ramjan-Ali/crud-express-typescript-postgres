

// app.post("/users", async (req: Request, res: Response) => {
//   const { name, email, age, phone, address } = req.body;

//   try {
//     const result = await pool.query(
//       `INSERT INTO users(name, email, age, phone, address) VALUES($1, $2 ,$3 , $4 , $5) RETURNING *`,
//       [name, email, age, phone, address],
//     );
//     res.status(201).json({
//       success: true,
//       message: "User created successfully",
//       data: result.rows[0],
//     });
//   } catch (error: any) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });


// app.get("/users", (req: Request, res: Response) => {
//   pool.query(`SELECT * FROM users`, (error, results) => {
//     if (error) {
//       throw error;
//     }
//     res.status(200).json({
//       success: true,
//       messege: "User fetch successfully",
//       data: results.rows,
//     });
//   });
// });