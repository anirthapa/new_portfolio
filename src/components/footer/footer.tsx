export default function Footer() {
  return (
    <footer className="w-full h-16 bg-gray-800 flex items-center justify-center mt-8">
      <p className="text-white text-sm">
        &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </p>
    </footer>
  );
}
