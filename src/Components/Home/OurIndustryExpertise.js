

const industries = [
    {
        title: "Fintech",
        desc: "Reliable fintech tools for transactions, savings, and management.",
        icon: '1.png',
    },
    {
        title: "Healthcare",
        desc: "Smart, secure systems for clinics, diagnostics, and patient care.",
        icon: '2.png',
    },
    {
        title: "Automotive",
        desc: "Digital solutions for car dealers, service centers, and auto platforms.",
        icon: '3.png',
    },
    {
        title: "E-commerce",
        desc: "Modern online stores with smooth buying experiences.",
        icon: '4.png',
    },
    {
        title: "Education",
        desc: "Learning platforms that make teaching and studying simple.",
        icon: '5.png',
    },
    {
        title: "Real Estate",
        desc: "Smart property listing and management platforms.",
        icon: '6.png',
    },
    {
        title: "Logistics & Supply Chain",
        desc: "Optimizing delivery, tracking, and fleet management.",
        icon: '7.png',
    },
    {
        title: "Travel & Hospitality",
        desc: "Booking systems and customer experience apps for tourism.",
        icon: '8.png',
    },
    {
        title: "Food & Restaurant",
        desc: "POS, ordering, and delivery systems for F&B businesses.",
        icon: '9.png',
    },
    {
        title: "SaaS & Enterprise",
        desc: "Cloud-based tools for business operations and efficiency.",
        icon: '10.png',
    },
    {
        title: "Fitness & Sports",
        desc: "Workout, coaching, and performance tracking apps.",
        icon: '11.png',
    },
    {
        title: "And Many More...",
        desc: "We build solutions for 40+ industries, tailored to unique business needs.",
        icon: '12.png',
    },
];

const OurIndustryExpertise = () => {
    return (
        <section className="relative  py-20">
            <img className='absolute max-w-[800px] top-1/4 left-0' src="/Images/Home/partners/ourIndustry.png" alt="" />
            <div className="container mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-semibold text-white">
                        Our Industry Expertise
                    </h2>
                    <p className="text-gray-400 mt-3">
                        We serve diverse industries with specialized solutions
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
                    {industries.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div key={index} className="relative px-6 group">
                                {/* Vertical divider */}
                                {index % 3 !== 0 && (
                                    <span className="hidden lg:block absolute left-0 top-0 h-full w-[2px] bg-gray-500" />
                                )}

                                <img src={'/Images/Home/IndustryExpertise/' + item.icon} alt="" />

                                <h3 className="text-lg font-semibold text-white mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                    {item.desc}
                                </p>

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
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default OurIndustryExpertise;
