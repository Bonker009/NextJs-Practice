import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET() {
  const res = await prisma.employees.findMany();
  // console.table(res);
  return NextResponse.json({
    status: 200,
    message: "All Records",
    payload: res,
  });
}
