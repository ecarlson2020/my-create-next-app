import { Request, Response } from "express";
import { RowDataPacket } from "mysql2";
// utils
import { sql } from "../utils/coreUtils";

interface User extends RowDataPacket {
  id: number;
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  created_at: Date;
}

export const testRoute = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  try {
    // Test query to get all users from the database
    const rows = await sql<User>(
      `SELECT id, email, username, first_name, last_name, created_at FROM users`,
      [],
    );

    res.status(200).json({
      success: true,
      count: rows.length,
      data: rows,
    });
  } catch (e) {
    console.error("Test route error:", e);
    res.status(500).json({
      success: false,
      error: e instanceof Error ? e.message : "Unknown error",
    });
  }
};
