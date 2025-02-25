import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';


const prisma = new PrismaClient();

export async function POST(request: Request) {
  const data = await request.json();
  const awardee = await prisma.awardees.create({ data });
  return NextResponse.json(awardee);
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limitParam = searchParams.get('limit');
    const sortParam = searchParams.get('sort');

    let limit = 10; 
    if (limitParam && !isNaN(parseInt(limitParam))) {
      limit = parseInt(limitParam);
    }
    if (limit > 100) {
      limit = 100; 
    }

    let orderBy = {};
    if (sortParam === 'desc') {
      orderBy = { createdAt: 'desc' }; // Assuming you have a createdAt field
    }

    const awardees = await prisma.awardees.findMany({
      take: limit,
      orderBy: orderBy,
    });

    return NextResponse.json(awardees);
  } catch (error) {
    console.error('Error fetching awardees:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
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
