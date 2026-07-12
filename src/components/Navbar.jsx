import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#050816]/80 border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6 lg:px-12">
        {/* Logo */}

        <a
          href="#home"
          className="text-2xl font-bold tracking-wide"
        >
          <span className="text-white">Vibhuvan</span>
          <span className="text-blue-500">.</span>
        </a>

        {/* Desktop Menu */}

        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition duration-300 relative group"
            >
              {link.name}

              <span
                className="
                absolute
                left-0
                -bottom-1
                h-[2px]
                w-0
                bg-blue-500
                transition-all
                duration-300
                group-hover:w-full
                "
              />
            </a>
          ))}
        </nav>

        
        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div
          className="
          md:hidden
          backdrop-blur-xl
          bg-[#09111f]/95
          border-t
          border-white/10
          "
        >
          <div className="flex flex-col px-8 py-6 gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="
                text-gray-300
                hover:text-blue-400
                text-lg
                transition
                "
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;