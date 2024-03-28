import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function DELETE(request, { params: { empId } }) {
  const deleteById = await prisma.employees.delete({
    where: {
      emp_id: +empId,
    },
  });
  
 

  return NextResponse.json({
    status: 200,
    message: "DELETED",
  });
}
