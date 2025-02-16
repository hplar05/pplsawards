import { db } from "@/lib/db"
import { NextResponse } from "next/server"


export async function GET() {
  try {
    const partners = await db.ourPartners.findMany()
    return NextResponse.json(partners)
  } catch (error) {
    console.error("Failed to fetch partners:", error)
    return NextResponse.json({ error: "Failed to fetch partners" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { logoImg } = await request.json()
    const partner = await db.ourPartners.create({
      data: { logoImg },
    })
    return NextResponse.json(partner)
  } catch (error) {
    console.error("Failed to create partner:", error)
    return NextResponse.json({ error: "Failed to create partner" }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    const { id, logoImg } = await request.json()
    const partner = await db.ourPartners.update({
      where: { id },
      data: { logoImg },
    })
    return NextResponse.json(partner)
  } catch (error) {
    console.error("Failed to update partner:", error)
    return NextResponse.json({ error: "Failed to update partner" }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json()
    await db.ourPartners.delete({
      where: { id },
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Failed to delete partner:", error)
    return NextResponse.json({ error: "Failed to delete partner" }, { status: 500 })
  }
}

