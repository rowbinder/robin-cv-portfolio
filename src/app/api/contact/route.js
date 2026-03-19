import { MongoClient } from 'mongodb';

// We initialize the client outside to keep the connection "warm"
const client = new MongoClient(process.env.MONGODB_URI);

export async function POST(req) {
  try {
    const data = await req.json();
    
    // 1. Connect to the Cluster
    await client.connect();
    
    // 2. Access the Database and Collection
    const db = client.db('rowbinder');
    const collection = db.collection('leads');

    // 3. Insert the Record
    const result = await collection.insertOne({
      ...data,
      timestamp: new Date(),
      status: 'new'
    });

    // 4. Return a successful 200 response
    return new Response(JSON.stringify({ success: true, id: result.insertedId }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    console.error("MONGODB ERROR:", error);
    return new Response(JSON.stringify({ error: error.message }), { 
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}