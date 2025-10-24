// utils
import { sql } from "../utils/core-utils.js";

export const testRoute = async (req, res) => {
  try {
    // Test query to get all users from the database
    const rows = await sql(`SELECT id, email, username, first_name, last_name, created_at FROM users`, []);

    res.status(200).json({
      success: true,
      count: rows.length,
      data: rows,
    });
  } catch (e) {
    console.error("Test route error:", e);
    res.status(500).json({
      success: false,
      error: e.message,
    });
  }
};
