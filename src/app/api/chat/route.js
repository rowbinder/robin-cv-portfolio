import { GoogleGenerativeAI } from "@google/generative-ai";
import { ROBIN_CONTEXT } from "@/lib/robin-context";

export async function POST(req) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "API Key Missing" }), { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    
    // Using the exact string from your diagnostic list:
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `${ROBIN_CONTEXT}\n\nUser Question: ${message}\nAssistant Answer:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return new Response(JSON.stringify({ text }), {
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("DETAILED GEMINI ERROR:", error.message);
    return new Response(JSON.stringify({ 
      error: "AI Connection Failed", 
      details: error.message 
    }), { 
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}