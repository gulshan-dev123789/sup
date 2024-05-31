import { NextRequest, NextResponse } from "next/server";
import Topic from "../../../../util/topic";
import connectMongoDB from "../../../../util/mongodb";

export async function POST(req: NextRequest) {
   const { title, description } = await req.json();
   await connectMongoDB();
   await Topic.create({ title, description });
   return NextResponse.json({ message: "Topic created" }, { status: 201 });
}
