import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
export const POST = async (req, res) => {
  const { emp_name, DOB, salary } = await req.json();
  const createdEmp = await prisma.employees.create({
    data: {
      salary: salary,
      DOB: DOB,
      emp_name: emp_name,
    },
  });
  
  return NextResponse.json({
    status: 200,
    message: "CREATED",
  });
};
