import { db } from "@/lib/db"
import { NextResponse } from "next/server"


export async function GET() {
  try {
    const presentations = await db.videoPresentation.findMany()
    return NextResponse.json(presentations)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch video presentations" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { videoLink, title } = await request.json()
    const newPresentation = await db.videoPresentation.create({
      data: { videoLink, title },
    })
    return NextResponse.json(newPresentation)
  } catch (error) {
    return NextResponse.json({ error: "Failed to create video presentation" }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    const { id, videoLink, title } = await request.json()
    const updatedPresentation = await db.videoPresentation.update({
      where: { id },
      data: { videoLink, title },
    })
    return NextResponse.json(updatedPresentation)
  } catch (error) {
    return NextResponse.json({ error: "Failed to update video presentation" }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")
    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 })
    }
    await db.videoPresentation.delete({ where: { id } })
    return NextResponse.json({ message: "Video presentation deleted successfully" })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete video presentation" }, { status: 500 })
  }
}

