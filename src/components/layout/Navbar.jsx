import { useState } from "react";
import { Link } from "react-router-dom";
import ExploreIcon from "@mui/icons-material/Explore";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { navLinks } from "../../data/navLinks";

export default function Navbar({ onNavigate }) {
  const scrolled = useScrollPosition(60);
  const [mobileOpen, setMobileOpen] = useState(false);

  const textColor = scrolled ? "text-stone-900" : "text-white/80 hover:text-white";
  const logoColor = scrolled ? "text-stone-900" : "text-white";
  const btnStyle = scrolled ? "bg-stone-900 text-white" : "bg-white text-stone-900";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/85 backdrop-blur-xl shadow-sm border-b border-black/5 py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className={`text-xl font-semibold tracking-tight flex items-center gap-2 transition-colors duration-300 ${logoColor}`}>
          <ExploreIcon sx={{ fontSize: 22 }} />
          Sri Lanka Travel
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`/#${link.toLowerCase()}`}
              className={`text-sm font-medium transition-all duration-300 tracking-tight ${textColor}`}
            >
              {link}
            </a>
          ))}
        </div>

        {/* <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={() => onNavigate("Sign in clicked")}
            className={`text-sm font-medium px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-300 ${textColor}`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => onNavigate("Welcome aboard!")}
            className={`text-sm font-medium px-5 py-2.5 rounded-full hover:scale-105 transition-all duration-300 shadow-lg ${btnStyle}`}
          >
            Get Started
          </button>
        </div> */}

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className={`md:hidden p-2 ${logoColor}`}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <CloseIcon sx={{ fontSize: 22 }} /> : <MenuIcon sx={{ fontSize: 22 }} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden mt-3 mx-6 bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 anim-fade-in">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`/#${link.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className="block text-white/90 text-sm font-medium py-3 border-b border-white/10 last:border-0"
            >
              {link}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              onNavigate("Welcome aboard!");
              setMobileOpen(false);
            }}
            className="w-full mt-4 bg-white text-stone-900 text-sm font-medium px-5 py-3 rounded-full"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}