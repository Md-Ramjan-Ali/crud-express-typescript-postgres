import { pool } from "../../config/db";

interface userCreateProps {
  name: string;
  email: string;
  age: number;
  phone: number;
  address: string;
}

interface usersUpdateProps {
  id: string;
  name: string;
  email: string;
}

const createUser = async ({
  name,
  email,
  age,
  phone,
  address,
}: userCreateProps) => {
  const result = await pool.query(
    `INSERT INTO users(name, email, age, phone, address) VALUES($1, $2 ,$3 , $4 , $5) RETURNING *`,
    [name, email, age, phone, address],
  );
  return result;
};
const getUser = async () => {
  const result = await pool.query(`SELECT * FROM users`);
  return result;
};
const getUserDetails = async (id: string) => {
  const result = await pool.query(`SELECT * FROM Users WHERE id = $1`, [id]);
  return result;
};
const userUpdate = async ({ id, name, email }: usersUpdateProps) => {
  const result = await pool.query(
    `UPDATE Users SET name=$1, email=$2 WHERE id=$3 RETURNING *`,
    [name, email, id],
  );
  return result;
};
const userDelete = async (id: string) => {
  const result = await pool.query(`DELETE FROM Users WHERE id=$1`, [id]);
  return result;
};
export const userServices = {
  createUser,
  getUser,
  getUserDetails,
  userUpdate,
  userDelete
};
