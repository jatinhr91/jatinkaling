export default function AboutPage() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <div className="bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-4xl font-extrabold mb-6 text-blue-700">
          About Us
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to our <span className="font-semibold">URL Shortener 🚀</span>!
        </p>
        <p className="text-gray-600 mb-3 leading-relaxed">
          This app allows you to create short, easy-to-share links for your
          favorite websites. No more messy and long links!
        </p>
        <p className="text-gray-600 mb-3 leading-relaxed">
          We built this project using{" "}
          <span className="font-medium text-blue-600">Next.js 13+, MongoDB,</span>{" "}
          and <span className="font-medium text-blue-600">TailwindCSS</span>.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Our mission is simple: make sharing links cleaner, faster, and more
          personal with custom short URLs that you control.
        </p>
      </div>
    </main>
  );
}
