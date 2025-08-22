export default function ContactPage() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <div className="bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-4xl font-extrabold mb-6 text-blue-700">
          Contact Us
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Have questions or feedback? We’d love to hear from you 💬
        </p>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-center">
            📧
            <a
              href="mailto:support@example.com"
              className="ml-2 text-blue-600 hover:underline"
            >
              support@example.com
            </a>
          </li>
          <li className="flex items-center">
            🐦
            <a
              href="https://twitter.com/example"
              target="_blank"
              className="ml-2 text-blue-600 hover:underline"
            >
              @example
            </a>
          </li>
          <li className="flex items-center">
            💼
            <a
              href="https://github.com/example"
              target="_blank"
              className="ml-2 text-blue-600 hover:underline"
            >
              github.com/example
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
