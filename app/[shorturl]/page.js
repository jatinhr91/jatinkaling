import { redirect } from "next/navigation";
import clientPromise from "../lib/mongodb";

export default async function Page({ params }) {
  const { shorturl } = params;
  if (!shorturl) return;

  try {
    const client = await clientPromise;
    const db = client.db("bitlinks");

    const shortUrlDoc = await db.collection("urls").findOne({ shorturl });
    if (!shortUrlDoc?.url) return;

    let finalUrl = shortUrlDoc.url;
    if (!/^https?:\/\//i.test(finalUrl)) {
      finalUrl = "http://" + finalUrl;
    }

    return redirect(finalUrl);
  } catch {
    return;
  }
}





