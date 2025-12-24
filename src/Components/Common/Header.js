'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const menuItems = [
    "Home",
    "Services",
    "Products",
    "Industry",
    "About",
    "Blog",
    "Contact",
  ];

  // Detect active section
  useEffect(() => {
    const sections = menuItems
      .map(item => document.getElementById(item.toLowerCase()))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-[999] backdrop-blur-xl bg-black/60 border-b border-white/5">
        <div className="container mx-auto px-3 lg:px-6">
          <div className="flex items-center justify-between py-4">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 text-xl font-medium text-gray-200">
              <img className="w-16" src="/Images/Home/Vector.png" alt="Logo" />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8">
              {menuItems.map(item => {
                const id = item.toLowerCase();
                const isActive = active === id;

                return (
                  <a
                    key={id}
                    href={`#${id}`}
                    className={`relative transition-all duration-300
                      ${isActive
                        ? "text-white drop-shadow-[0_0_6px_#0059ff]"
                        : "text-gray-400 hover:text-white"
                      }`}
                  >
                    {item}
                  </a>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link
                href="#contact"
                className="bg-white text-primary shadow-[0_0_10px_#0059ff] px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-200 transition"
              >
                Schedule a Call
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white text-2xl"
              onClick={() => setOpen(!open)}
            >
              {open ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 overflow-hidden
              ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
          >
            <nav className="flex flex-col gap-4 pb-6">
              {menuItems.map(item => {
                const id = item.toLowerCase();
                const isActive = active === id;

                return (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className={`text-base transition
                      ${isActive
                        ? "text-white drop-shadow-[0_0_6px_#0059ff]"
                        : "text-gray-400 hover:text-white"
                      }`}
                  >
                    {item}
                  </a>
                );
              })}

              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 text-center bg-white text-black py-3 rounded-full text-sm"
              >
                Schedule a Call
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Spacer so content doesn't hide behind fixed header */}
      <div className="h-[88px]" />
    </>
  );
};

export default Header;
