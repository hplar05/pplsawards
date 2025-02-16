import { db } from "@/lib/db"
import { NextResponse } from "next/server"




export async function GET() {
  try {
    const [totalAwardees, categories, recentAwardees] = await Promise.all([
      db.awardees.count(),
      db.awardees.groupBy({
        by: ["categories"],
        _count: true,
      }),
     db.awardees.findMany({
        take: 5,
        orderBy: {
          createdAt: "desc",
        },
        select: {
          id: true,
          fullname: true,
          categories: true,
          createdAt: true,
        },
      }),
    ])

    return NextResponse.json({
      totalAwardees,
      categories: categories.length,
      recentAwardees,
    })
  } catch (error) {
    console.error("Failed to fetch dashboard data:", error)
    return NextResponse.json({ error: "Failed to fetch dashboard data" }, { status: 500 })
  }
}

