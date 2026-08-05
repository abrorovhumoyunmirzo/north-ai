import { NextResponse } from "next/server";
import { generateAIRoamap } from "@/lib/ai/roadmap";

export async function POST(req: Request) {
    const { goal } = await req.json();

    const roadmap = await generateAIRoamap(goal);

    return NextResponse.json(roadmap);
}