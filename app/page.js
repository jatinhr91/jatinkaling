import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-1 md:grid-cols-2 h-[70vh]">
        {/* Left Section */}
        <div className="flex flex-col gap-6 items-center justify-center text-center px-6">
          <p className="text-4xl md:text-5xl font-bold font-serif text-purple-700">
            The Best URL Shortener in the Market
          </p>
          <p className="max-w-xl text-gray-700 leading-relaxed">
            We are the most straightforward URL shortener in the world. Most
            of the URL shorteners track you or ask for login details.  
            We understand your needs and built this tool to be simple,
            secure, and fast.
          </p>
          <div className="flex gap-4">
            <Link href="/shorten">
              <button className="bg-purple-600 hover:bg-purple-700 rounded-lg shadow-lg px-6 py-2 font-bold text-white transition">
                Try Now
              </button>
            </Link>
            <a
              href="https://github.com/YOUR_USERNAME/YOUR_REPO" // 🔗 Update this
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-gray-800 hover:bg-black rounded-lg shadow-lg px-6 py-2 font-bold text-white transition">
                GitHub
              </button>
            </a>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex justify-center items-center relative">
          <Image
            className="mix-blend-darken object-contain"
            alt="Vector illustration"
            src="/images.png"
            fill
            priority
          />
        </div>
      </section>
    </main>
  );
}
