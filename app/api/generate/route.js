import clientPromise from "../../lib/mongodb"; // fixed path

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("bitlinks");

    const urls = await db
      .collection("urls")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return new Response(
      JSON.stringify({ urls }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Error fetching URLs:", err);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export async function POST(req) {
  try {
    const { url, shorturl } = await req.json();

    if (!url || !shorturl) {
      return new Response(
        JSON.stringify({ error: "Missing full URL or short URL" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    try {
      new URL(url);
    } catch {
      return new Response(
        JSON.stringify({ error: "Invalid full URL" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const client = await clientPromise;
    const db = client.db("bitlinks");

    await db.collection("urls").createIndex({ shorturl: 1 }, { unique: true });

    const exists = await db.collection("urls").findOne({ shorturl });
    if (exists) {
      return new Response(
        JSON.stringify({ error: "Short URL already exists" }),
        { status: 409, headers: { "Content-Type": "application/json" } }
      );
    }

    const result = await db.collection("urls").insertOne({
      shorturl,
      url,
      createdAt: new Date(),
    });

    return new Response(
      JSON.stringify({ _id: result.insertedId, shorturl, url }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Error generating short URL:", err);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}



