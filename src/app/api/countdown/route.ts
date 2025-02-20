import { db } from "@/lib/db"
import { NextResponse } from "next/server"


export async function GET() {
  try {
    const countdown = await db.countdown.findFirst()
    return NextResponse.json(countdown)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch countdown" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { targetDate, description } = await request.json()

    const updatedCountdown = await db.countdown.upsert({
      where: { id: "1" }, // Assuming we only have one countdown
      update: {
        targetDate: new Date(targetDate),
        description,
      },
      create: {
        id: "1",
        targetDate: new Date(targetDate),
        description,
      },
    })

    return NextResponse.json(updatedCountdown)
  } catch (error) {
    return NextResponse.json({ error: "Failed to update countdown" }, { status: 500 })
  }
}

