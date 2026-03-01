import Image from "next/image";
import React from "react";
import Container from "../common/Container";

interface Category {
    id: string;
    title: string;
    jobsCount: number;
    icon: string;
    highlighted?: boolean;
}

const categories: Category[] = [
    {
        id: "design",
        title: "Design",
        jobsCount: 235,
        icon: "/category_img/design.png",
    },
    {
        id: "sales",
        title: "Sales",
        jobsCount: 756,
        icon: "/category_img/sales.png",
    },
    {
        id: "marketing",
        title: "Marketing",
        jobsCount: 140,
        highlighted: true,
        icon: "/category_img/marketing.png",
    },
    {
        id: "finance",
        title: "Finance",
        jobsCount: 325,
        icon: "/category_img/finance.png",
    },
    {
        id: "technology",
        title: "Technology",
        jobsCount: 436,
        icon: "/category_img/technology.png",
    },
    {
        id: "engineering",
        title: "Engineering",
        jobsCount: 542,
        icon: "/category_img/engineering.png",
    },
    {
        id: "business",
        title: "Business",
        jobsCount: 211,
        icon: "/category_img/business.png",
    },
    {
        id: "human-resource",
        title: "Human Resource",
        jobsCount: 346,
        icon: "/category_img/human.png",
    },
];

export default function CategorySection() {
    return (
        <section className="bg-white py-16 md:py-24">
            <Container>
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#25324B]">
                        Explore by <span className="text-accent-blue">category</span>
                    </h2>
                    <a href="#" className="flex items-center gap-2 text-brand-purple font-semibold group hover:opacity-80 transition-opacity">
                        Show all jobs
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </a>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className={'group relative p-8 border border-gray-100 transition-all duration-300 cursor-pointer text-[#25324B] hover:bg-brand-purple group-hover:text-white transition-colors'}
                        >
                            {/* Icon */}
                            <div className={`mb-8 w-12 h-12 relative group-hover:brightness-0 group-hover:invert transition-all duration-300 ${category.highlighted ? "text-[#4640DE]" : ""
                                }`}>
                                <Image
                                    src={category.icon}
                                    alt={category.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Content */}
                            <div className="space-y-2 text-[#25324B] group-hover:text-white transition-colors ">
                                <h3 className={`text-2xl font-bold font-clash `}>
                                    {category.title}
                                </h3>
                                <p className={`text-base flex items-center gap-2 text-[#7C7C8B] group-hover:text-white transition-colors `}>
                                    {category.jobsCount} jobs available
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform text-[#25324B] group-hover:text-white`}>
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
