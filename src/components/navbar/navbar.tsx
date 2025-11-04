import { navLinks } from "@/constants/navlinks";

export default function Navbar() {
  return (
    <nav className="w-full h-16 bg-gray-800 flex items-center justify-center">
      <h1 className="text-white text-lg font-semibold">
        My<span className="text-blue-500">Portfolio</span>
      </h1>

      <ul className="flex items-center space-x-4 ml-auto">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.path} className="text-white hover:text-blue-500">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
