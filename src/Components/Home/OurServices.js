'use client';

const services = [
    {
        title: "UI UX Design",
        desc: "User-focused designs that look great and work flawlessly.",
    },
    {
        title: "Web Development",
        desc: "High-performance websites built with modern technologies.",

    },
    {
        title: "App Development",
        desc: "Cross-platform and native apps for iOS & Android.",

    },
    {
        title: "AI Product Design",
        desc: "Smart interfaces for AI-driven tools and automation.",

    },
    {
        title: "SaaS Design",
        desc: "Scalable dashboards and multi-user platform design.",

    },
    {
        title: "Game UI/UX",
        desc: "Immersive and interactive interfaces for mobile & PC games.",

    },
    {
        title: "Framer Design",
        desc: "Fully interactive, production-ready web experiences.",

    },
    {
        title: "CMS Design",
        desc: "Organized, flexible content-focused systems and dashboards.",

    },
    {
        title: "Many More…",
        desc: "We design and develop custom solutions for any vision.",

    },
];

const OurServices = () => {
    return (
        <section id="services" className="relative py-20 scroll-mt-24">
            {/* Background image */}
            <img
                className="absolute max-w-[800px] top-1/6 left-0 pointer-events-none"
                src="/Images/Home/partners/ourIndustry.png"
                alt=""
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-semibold text-white">
                        Our Services
                    </h2>
                    <p className="text-gray-400 mt-3">
                        From strategy to launch — everything you need in one place.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
                    {services.map((item, index) => (
                        <div key={index} className="relative px-6 group">
                            {/* Vertical divider */}
                            {index % 3 !== 0 && (
                                <span className="hidden lg:block absolute left-0 top-0 h-full w-[2px] bg-gray-500" />
                            )}


                            {/* Title */}
                            <h3 className="text-lg font-semibold text-white mb-2">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                {item.desc}
                            </p>

                            {/* Link */}
                            <a
                                href="#"
                                className="inline-flex items-center text-sm text-gray-300 hover:text-white transition"
                            >
                                Learn more
                                <span className="ml-2 transition-transform group-hover:translate-x-1">
                                    →
                                </span>
                            </a>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a
                        href="#contact"
                        className="bg-white text-black px-8 py-4 rounded-full text-sm font-medium shadow-[0_0_15px_rgba(0,89,255,0.5)] hover:bg-gray-200 transition"
                    >
                        Schedule a Call
                    </a>

                    <a
                        href="/services"
                        className="text-primary text-sm font-medium border border-gray-300 px-8 py-4 rounded-full hover:text-gray-300 transition"
                    >
                        See Our Services
                    </a>
                </div>
            </div>
        </section>
    );
};

export default OurServices;
