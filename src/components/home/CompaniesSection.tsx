import Image from "next/image";
import Container from "../common/Container";


export default function CompaniesSection() {
    const companies = [
        { name: "vodafone", logo: "/company_logo/vodafone-2017-logo.png", width: 40, height: 40 },
        { name: "intel", logo: "/company_logo/intel-3.png", width: 40, height: 40 },
        { name: "tesla", logo: "/company_logo/tesla-9 1.png", width: 40, height: 30 },
        { name: "amd", logo: "/company_logo/amd-logo-1.png", width: 40, height: 40 },
        { name: "talkit", logo: "/company_logo/talkit 1.png", width: 40, height: 40 },
    ];

    return (
        <section className="w-full bg-white py-12 border-t border-gray-50">
            <Container>
                {/* ── Label ── */}
                <p className="text-sm text-[#7C7C8B] font-medium mb-10 tracking-wide">
                    Companies we helped grow
                </p>

                {/* ── Logos Row ── */}
                <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12 lg:gap-16">
                    {companies.map((company) => (
                        <div key={company.name} className="relative transition-opacity duration-300 hover:opacity-80">
                            <Image
                                src={company.logo}
                                alt={`${company.name} logo`}
                                width={company.width}
                                height={company.height}
                                className="h-5 md:h-8 w-auto object-contain grayscale opacity-100 hover:grayscale-0 hover:opacity-100 transition-all"
                            />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}