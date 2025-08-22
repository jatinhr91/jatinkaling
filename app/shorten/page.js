"use client";

import { useState, useEffect } from "react";

export default function ShortenPage() {
  const [url, setUrl] = useState("");
  const [shorturl, setShorturl] = useState("");
  const [message, setMessage] = useState("");
  const [urls, setUrls] = useState([]);

  // Fetch all URLs on page load
  useEffect(() => {
    fetch("/api/generate")
      .then((res) => res.json())
      .then((data) => setUrls(data.urls))
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, shorturl }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Short URL created successfully!");
        setUrls([data, ...urls]);
        setUrl("");
        setShorturl("");
      } else {
        setMessage(data.error || data.message);
      }
    } catch (err) {
      setMessage("Something went wrong!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Create a Short URL</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-96">
        <input
          type="text"
          placeholder="Enter your long URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Enter a custom short URL"
          value={shorturl}
          onChange={(e) => setShorturl(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <button type="submit" className="bg-purple-500 text-white p-2 rounded font-bold">
          Save Short URL
        </button>
      </form>

      {message && <p className="mt-4 text-center">{message}</p>}

      <div className="mt-6 w-96">
        <h2 className="text-xl font-bold mb-2">Generated URLs:</h2>
        {urls.length === 0 ? (
          <p>No URLs created yet.</p>
        ) : (
          <ul className="flex flex-col gap-2">
            {urls.map((link) => (
              <li key={link._id} className="flex justify-between items-center p-2 border rounded">
                {/* Open the original URL in a new tab */}
                <a
                  href={link.url} // points directly to original URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 font-bold underline"
                >
                  {link.shorturl}
                </a>
                <span className="text-gray-500">{link.url}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

