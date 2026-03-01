"use client";

import HeroSection from "./HeroSection";
import CompaniesSection from "./CompaniesSection";
import CategorySection from "./CategorySection";
import Footer from "../common/Footer";

const HomeContent = () => {
    return (
        <main>
            <HeroSection />
            <CompaniesSection />
            <CategorySection />
            <Footer />
        </main>
    )
}

export default HomeContent;
