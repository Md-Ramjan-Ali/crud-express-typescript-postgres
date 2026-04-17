import { pool } from "../../config/db";

const todosCreate = async (id: number, title: string) => {
  const result = await pool.query(
    `INSERT INTO todos(user_id, title) VALUES($1, $2) RETURNING *`,
    [id, title],
  );
  return result;
};

const todosGet = async () => {
  const result = await pool.query(`SELECT * FROM todos`);
  return result;
};

const todosGetSingle=async(id:string)=>{
  const result = await pool.query(`SELECT * FROM todos WHERE id=$1`, [
   id
  ]);
  return result
}

const todosUpdate=async(title:string,id:string)=>{
   const result = await pool.query(
      `UPDATE Todos SET title=$1 WHERE id=$2 RETURNING *`,
      [title, id],
    );
    return result
}

const todosDelete=async(id:string)=>{
   const result = await pool.query(`DELETE FROM todos WHERE id=$1`, [
    id
  ]);
  return result
}

export const todosServices = {
  todosCreate,
  todosGet,
  todosGetSingle,
  todosUpdate,
  todosDelete
};
