import Image from "next/image";
import { useState } from "react";
import Container from "../common/Container";


export default function HeroSection() {
    const [keyword, setKeyword] = useState("");
    const [location, setLocation] = useState("Florence, Italy");

    const popularSearches = ["UI Designer", "UX Researcher", "Android", "Admin"];

    return (
        <section className="relative bg-[#F5F5FA] overflow-hidden">
            <Container className="relative w-full pt-10 sm:pt-12 lg:pt-16 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8">
                    {/* Left Content */}
                    <div className="relative z-20">
                        {/* Main Headline */}
                        <div className="relative pt-5 sm:pt-8 lg:pt-10 ">
                            <h1 className="text-[2.6rem] sm:text-5xl lg:text-7xl font-extrabold text-[#25324B] leading-[1.1] tracking-tight font-clash">
                                Discover
                                <br />
                                more than
                                <br />
                                <span className="text-accent-blue">5000+ Jobs</span>
                            </h1>

                            {/* brushstroke underline */}
                            <div className="mt-1 mb-3">
                                <svg
                                    viewBox="0 0 260 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-[220px] sm:w-[260px] h-6"
                                >
                                    <path
                                        d="M4 14 C 40 6, 100 18, 160 10 S 230 16, 256 12"
                                        stroke="#26A4FF"
                                        strokeWidth="5"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M8 18 C 50 10, 110 20, 170 12 S 235 18, 255 14"
                                        stroke="#1D9BF0"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        opacity="0.8"
                                    />
                                    <path
                                        d="M6 20 C 45 12, 105 22, 165 14 S 228 20, 250 16"
                                        stroke="#26A4FF"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        opacity="0.6"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-[#6B6B8A] text-sm sm:text-base leading-relaxed max-w-sm mb-7">
                            Great platform for the job seeker that searching for new career
                            heights and passionate about startups.
                        </p>

                        {/* Search Box */}
                        <div className="relative z-30 bg-white shadow-xl border border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-2 sm:p-2 md:w-[650px] lg:w-[730px] mt-6">
                            {/* Keyword Input */}
                            <div className="flex items-center gap-2 px-3 py-2 flex-1 min-w-0">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#9CA3AF"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-4 h-4 flex-shrink-0"
                                >
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.35-4.35" />
                                </svg>
                                <div className="border-b border-gray-100 w-full">
                                    <input
                                        type="text"
                                        placeholder="Job title or keyword"
                                        value={keyword}
                                        onChange={(e) => setKeyword(e.target.value)}
                                        className="w-full text-[16px] text-[#1A1A2E] placeholder-gray-400 outline-none bg-transparent py-1"
                                    />
                                </div>
                            </div>

                            {/* Location Select */}
                            <div className="flex items-center gap-2 px-3 py-2 flex-1 min-w-0">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#9CA3AF"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-4 h-4 flex-shrink-0"
                                >
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                <div className="flex items-center gap-2 border-b border-gray-100 w-full">
                                    <select
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        className="w-full text-[16px] text-[#25324B] outline-none bg-transparent appearance-none cursor-pointer py-1"
                                    >
                                        <option value="Florence, Italy">Florence, Italy</option>
                                        <option value="Rome, Italy">Rome, Italy</option>
                                        <option value="Milan, Italy">Milan, Italy</option>
                                        <option value="New York, USA">New York, USA</option>
                                        <option value="London, UK">London, UK</option>
                                    </select>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#9CA3AF"
                                        strokeWidth="2"
                                        className="w-4 h-4 flex-shrink-0"
                                    >
                                        <path
                                            d="M6 9l6 6 6-6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/* Search Button */}
                            <button className="bg-brand-purple text-white text-base font-bold px-8 py-3  hover:opacity-90 transition-all duration-200 whitespace-nowrap flex-shrink-0 shadow-lg shadow-brand-purple/20">
                                Search my job
                            </button>
                        </div>

                        {/* Popular searches */}
                        <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-[#6B6B8A]">
                            <span className="font-medium text-[#1A1A2E]">Popular :</span>
                            {popularSearches.map((term, index) => (
                                <a
                                    key={term}
                                    href="#"
                                    className="hover:text-brand-purple transition-colors duration-200 font-medium"
                                >
                                    {term}
                                    {index < popularSearches.length - 1 ? "," : ""}
                                </a>
                            ))}
                        </div>
                    </div>


                    {/* Right — Hero Image */}
                    <div className="relative flex justify-center md:justify-end items-end hidden md:flex">
                        {/* background behind person */}
                        <div className="absolute inset-0 bottom-10 -translate-y-10 w-[340px] h-[420px] lg:w-[1000px] lg:h-[900px]">
                            <Image src="/pattern.png"
                                alt="square"
                                width={600}
                                height={900}
                                className="object-contain relative  w-full h-full"
                                priority />
                        </div>
                        {/* THe person image */}
                        <div className="relative  w-[340px] h-[420px] lg:w-[500px] lg:h-[710px]">
                            <Image
                                src="/banner_img.png"
                                alt="Job Seeker"
                                width={600}
                                height={900}
                                className="object-contain relative  w-full h-full"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section >
    );
}