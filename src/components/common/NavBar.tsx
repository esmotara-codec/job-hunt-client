"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when drawer is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const navLinks = [
        { name: "Find Jobs", href: "/jobs" },
        { name: "Browse Companies", href: "/companies" },
    ];

    return (
        <>
            <nav className="bg-[#F8F8FD]">
                <Container className="flex items-center justify-between py-3">

                    {/* Logo & Desktop Links */}
                    <div className="flex items-center gap-12">
                        <Link href="/" className="flex items-center gap-2 shrink-0">
                            <Image
                                src="/images/logo.png"
                                alt="QuickHire Logo"
                                width={140}
                                height={40}
                                className="h-8 w-auto"
                            />
                            <span className="text-[#1A1A2E] font-bold text-xl tracking-tight">
                                QuickHire
                            </span>
                        </Link>

                        {/* Desktop Nav Links */}
                        <div className="hidden md:flex items-center gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-[#4A4A68] hover:text-brand-purple transition-all duration-200"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right side- Auth Actions */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link
                            href="/login"
                            className="text-sm font-bold text-brand-purple hover:opacity-80 transition-opacity duration-200"
                        >
                            Login
                        </Link>

                        {/* Vertical Divider */}
                        <div className="w-px h-6 bg-gray-300 mx-1" />

                        <Link
                            href="/signup"
                            className="bg-brand-purple text-white text-sm font-bold px-8 py-3 hover:opacity-90 transition-all duration-200 active:scale-95 shadow-lg shadow-brand-purple/20"
                        >
                            Sign Up
                        </Link>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
                        aria-label="Open menu"
                    >
                        <svg className="w-6 h-6 text-[#1A1A2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>

                </Container>
            </nav>

            {/* MOBILE DRAWER */}

            {/* Backdrop */}
            <div
                onClick={() => setIsOpen(false)}
                className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                    }`}
            />

            {/* Drawer Panel */}
            <div
                className={`fixed top-0 left-0 z-[70] h-full w-[280px] bg-white shadow-2xl flex flex-col
          transform transition-transform duration-300 ease-in-out md:hidden
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                {/* Drawer Header */}
                <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100">
                    <Link href="/" onClick={() => setIsOpen(false)}>
                        <Image
                            src="/images/logo.png"
                            alt="QuickHire Logo"
                            width={120}
                            height={30}
                            className="h-6 w-auto"
                        />
                        <span className="text-[#1A1A2E] font-bold text-xl tracking-tight">
                            QuickHire
                        </span>
                    </Link>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                    >
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Nav Links */}
                <div className="flex flex-col px-4 py-6 gap-2 flex-1 overflow-y-auto">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-3 rounded-lg text-base font-medium text-[#1A1A2E] hover:bg-brand-purple/5 hover:text-brand-purple transition-all"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Drawer Auth */}
                <div className="p-6 border-t border-gray-100 flex flex-col gap-3">
                    <Link
                        href="/login"
                        onClick={() => setIsOpen(false)}
                        className="w-full py-3 text-center text-sm font-bold text-brand-purple border border-brand-purple rounded hover:bg-brand-purple/5 transition-all"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;