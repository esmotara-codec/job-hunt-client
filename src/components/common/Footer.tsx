"use client";

import { useState } from "react";
import Container from "./Container";
import Image from "next/image";

const aboutLinks = ["Companies", "Pricing", "Terms", "Advice", "Privacy Policy"];
const resourceLinks = ["Help Docs", "Guide", "Updates", "Contact Us"];

const socialIcons = [
    {
        name: "Facebook",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
        ),
    },
    {
        name: "Instagram",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        name: "Globe",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
            </svg>
        ),
    },
    {
        name: "LinkedIn",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
    },
    {
        name: "Twitter",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
        ),
    },
];

export default function Footer() {
    const [email, setEmail] = useState("");

    return (
        <footer className="w-full bg-[#1A1A2E]">
            <Container>
                {/* ── Top Section ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14">

                    {/* ── Col 1: Brand ── */}
                    <div className="flex flex-col gap-5">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-[#5D5FEF] flex items-center justify-center shadow-md shadow-[#5D5FEF]/30">
                                <Image
                                    src="/images/logo.png"
                                    alt="QuickHire Logo"
                                    width={140}
                                    height={40}
                                    className="h-8 w-auto"
                                />
                            </div>
                            <span className="text-white font-bold text-xl tracking-tight">
                                QuickHire
                            </span>
                        </div>

                        {/* Tagline */}
                        <p className="text-[#8888AA] text-sm leading-relaxed">
                            Great platform for the job seeker that passionate about startups. Find your dream job easier.
                        </p>
                    </div>

                    {/* ── Col 2: About ── */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-semibold text-[15px]">About</h4>
                        <ul className="flex flex-col gap-3">
                            {aboutLinks.map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="text-[#8888AA] text-sm hover:text-white transition-colors duration-200"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── Col 3: Resources ── */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-semibold text-[15px]">Resources</h4>
                        <ul className="flex flex-col gap-3">
                            {resourceLinks.map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="text-[#8888AA] text-sm hover:text-white transition-colors duration-200"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── Col 4: Newsletter ── */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-semibold text-[15px]">
                            Get job notifications
                        </h4>
                        <p className="text-[#8888AA] text-sm leading-relaxed">
                            The latest job news, articles, sent to your inbox weekly.
                        </p>
                        {/* Email Input + Button */}
                        <div className="flex gap-2 items-stretch mt-1">
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-1 min-w-0 bg-white text-[#1A1A2E] text-sm px-4 py-2.5 outline-none placeholder-gray-400"
                            />
                            <button className="bg-brand-purple text-white text-sm font-semibold px-4 py-2.5 whitespace-nowrap flex-shrink-0">
                                Subscribe
                            </button>
                        </div>
                    </div>

                </div>

                {/* ── Divider ── */}
                <div className="w-full h-px bg-[#2E2E48]" />

                {/* ── Bottom Bar ── */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">

                    {/* Copyright */}
                    <p className="text-[#8888AA] text-sm">
                        2021 © QuickHire. All rights reserved.
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-3">
                        {socialIcons.map((social) => (
                            <a
                                key={social.name}
                                href="#"
                                aria-label={social.name}
                                className="w-8 h-8 rounded-full bg-[#2A2A42] hover:bg-[#5D5FEF] text-[#8888AA] hover:text-white flex items-center justify-center transition-all duration-200"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                </div>
            </Container>
        </footer>
    );
}