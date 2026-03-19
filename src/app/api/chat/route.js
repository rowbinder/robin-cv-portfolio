import { GoogleGenerativeAI } from "@google/generative-ai";
import { ROBIN_CONTEXT } from "@/lib/robin-context";

export async function POST(req) {
  try {
    const { message } = await req.json();
    
    // 1. Grab the key inside the function
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
    
    if (!apiKey) {
      console.error("ERROR: GOOGLE_GENERATIVE_AI_API_KEY is undefined in .env.local");
      return new Response(JSON.stringify({ error: "API Key Missing" }), { status: 500 });
    }

    // 2. Initialize Gemini ONLY when a request happens
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

    // 3. Build the prompt using your Robin Context
    const prompt = `${ROBIN_CONTEXT}\n\nUser Question: ${message}\nAssistant Answer:`;

    // 4. Call the API
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return new Response(JSON.stringify({ text }), {
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    // This will now show the REAL error in your VS Code terminal
    console.error("DETAILED GEMINI ERROR:", error);
    
    return new Response(JSON.stringify({ 
      error: "AI Connection Failed", 
      details: error.message 
    }), { 
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}