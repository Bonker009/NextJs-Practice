import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET(request, { params: { empId } }) {
  
  const res = await prisma.employees.findUnique({
    where: {
      emp_id: parseInt(empId),
    },
  });

  console.table(res);
  return NextResponse.json({
    status: 200,
    message: "This is seyha",
    payload: res,
  });
}
