import React from "react";
import Section from "./Section";

const Services = () => {
    return (
        <Section>
            <div className="lg:py-32 py-10 overflow-hidden">
                <div className="text-center mb-10 lg:mb-20">
                    <h2 className="text-4xl font-semibold">Our Partnerships</h2>
                    <p className="text-gray-400 mt-2">
                        Trusted by leading companies worldwide
                    </p>
                </div>

                {/* Marquee Wrapper */}
                <div className="relative w-full overflow-hidden">
                    <div className="marquee flex items-center gap-16">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="flex items-center gap-16 shrink-0">
                                <img
                                    src="/Images/Home/partners/Microsoft.png"
                                    className="w-32 object-contain"
                                    alt="Microsoft"
                                />
                                <img
                                    src="/Images/Home/partners/Oracle.png"
                                    className="w-32 object-contain"
                                    alt="Oracle"
                                />
                                <img
                                    src="/Images/Home/partners/Salesforce.png"
                                    className="w-32 object-contain"
                                    alt="Salesforce"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative w-full mt-10 overflow-hidden">
                    <div className="marquee2 flex items-center gap-16">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="flex items-center gap-16 shrink-0">
                                <img
                                    src="/Images/Home/partners/Microsoft.png"
                                    className="w-32 object-contain"
                                    alt="Microsoft"
                                />
                                <img
                                    src="/Images/Home/partners/Oracle.png"
                                    className="w-32 object-contain"
                                    alt="Oracle"
                                />
                                <img
                                    src="/Images/Home/partners/Salesforce.png"
                                    className="w-32 object-contain"
                                    alt="Salesforce"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Services;
