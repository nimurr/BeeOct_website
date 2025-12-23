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

    // Active section detection
    useEffect(() => {
        const sections = menuItems.map(item =>
            document.getElementById(item.toLowerCase())
        );

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach(section => section && observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        <header className="sticky backdrop-blur-xl bg-black/50 top-0 z-50">
            <div className="container mx-auto px-2 lg:px-4">
                <div className=" rounded-full ">
                    <div className="flex items-center justify-between px-3 lg:px-6 py-4">

                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 text-xl font-medium text-gray-200">
                            <img className="w-16" src="/Images/Home/Vector.png" alt="" />
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
                                        className={`relative text-base transition-all duration-300
                                            ${isActive
                                                ? "text-white drop-shadow-[0_0_5px_#0059ff]"
                                                : "text-gray-400 "
                                            }`}
                                    >
                                        {item}
                                        {/* <span
                                            className={`absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-300
                                        ${isActive ? "w-full" : "w-0"}`}
                                        /> */}
                                    </a>

                                );
                            })}
                        </nav>

                        {/* CTA Button (Desktop) */}
                        <div className="hidden md:block">
                            <Link
                                href="#contact"
                                className="bg-white text-primary shadow-[0_0_10px_#0059ff]  px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-200 transition"
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
              ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                    >
                        <nav className="flex flex-col gap-4 px-3 lg:px-6 pb-6">
                            {menuItems.map(item => {
                                const id = item.toLowerCase();
                                const isActive = active === id;

                                return (
                                    <a
                                        key={id}
                                        href={`#${id}`}
                                        onClick={() => setOpen(false)}
                                        className={`text-base 
                                        ${isActive ? "text-white drop-shadow-[0_0_10px_#0059ff]" : "text-gray-400 "}`}
                                    >
                                        {item}
                                    </a>
                                );
                            })}

                            {/* CTA Button (Mobile) */}
                            <Link
                                href="#contact"
                                className="mt-4 text-center bg-white text-black py-2 rounded-full text-sm "
                                onClick={() => setOpen(false)}
                            >
                                Schedule a Call
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
