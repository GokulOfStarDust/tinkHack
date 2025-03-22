import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req) {
  try {
    const { userInput } = await req.json();

    // Send user input to OpenAI for workflow optimization
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are an expert in process optimization. Generate an optimized insurance claim workflow in plain text." },
        { role: "user", content: `Optimize this insurance claim workflow: ${userInput}` },
      ],
    });

    const optimizedWorkflow = response.choices[0].message.content;

    return NextResponse.json({ workflow: optimizedWorkflow });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
