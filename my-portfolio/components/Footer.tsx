export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400 text-sm">
        <p>© {currentYear} [Your Name]. All rights reserved.</p>
        <p className="mt-1">
          Built with <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">Next.js</a>,{" "}
          <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">Tailwind CSS</a> & Love.
        </p>
      </div>
    </footer>
  );
}