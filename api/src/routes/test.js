// utils
import { sql } from "../utils/core-utils.js";

export const testRoute = async (req, res) => {
  try {
    const id = 5
    const rows = await sql(
      `select * from some_table where id = ?`,
      [id],
    );

    res.status(200).json(rows);
  } catch (e) {
    res.status(500).send(e);
  }
};
