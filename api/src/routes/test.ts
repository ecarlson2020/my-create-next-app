import { Request, Response } from "express";
import { RowDataPacket } from "mysql2";
// utils
import { sql } from "../utils/coreUtils";

interface TestRow extends RowDataPacket {
  id: number;
  name: string;
  created_at: Date;
}

export const testRoute = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  try {
    // Test query to get all rows from the example test_table
    const rows = await sql<TestRow>(
      `SELECT id, name, created_at FROM test_table`,
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
