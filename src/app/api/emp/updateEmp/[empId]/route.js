import { PrismaClient } from "@prisma/client";
import { data } from "autoprefixer";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function PUT(request, { params: { empId } }) {
  const { emp_name, DOB, salary } = await request.json();
  const updateById = await prisma.employees.update({
    where: {
      emp_id: +empId,
    },
    data: {
      emp_name: emp_name,
      DOB: DOB,
      salary: salary,
    },
  });
  return NextResponse.json({
    status: 200,
    message: "UPDATED",
  });
}
