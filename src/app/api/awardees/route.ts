import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';


const prisma = new PrismaClient();

export async function POST(request: Request) {
  const data = await request.json();
  const awardee = await prisma.awardees.create({ data });
  return NextResponse.json(awardee);
}

export async function GET() {
  const awardees = await prisma.awardees.findMany();
  return NextResponse.json(awardees);
}

export async function PUT(request: Request) {
  const data = await request.json();
  const { id, ...updateData } = data;
  const awardee = await prisma.awardees.update({
    where: { id },
    data: updateData,
  });
  return NextResponse.json(awardee);
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  await prisma.awardees.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
