import React from "react";
import Section from "./Section";

const AllTechStacks = () => {
    return (
        <Section>
            <div className="lg:py-32 py-10 overflow-hidden">
                <div className="text-center mb-10 lg:mb-20">
                    <h2 className="text-4xl font-semibold">We Serve All Tech Stacks</h2>
                    <p className="text-gray-400 mt-2">
                        From front-end to cloud, we build with the technologies your business needs.
                    </p>
                </div>

                {/* Marquee Wrapper */}
                <div className="relative w-full overflow-hidden">
                    <div className="marquee flex items-center gap-16">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="flex items-center gap-16 shrink-0">
                                <img
                                    src="/Images/AllTech/HTML.png"
                                    className="w-32 object-contain"
                                    alt="Microsoft"
                                />
                                <img
                                   src="/Images/AllTech/CSS.png"
                                    className="w-32 object-contain"
                                    alt="Oracle"
                                />
                                <img
                                    src="/Images/AllTech/Flutter.png"
                                    className="w-32 object-contain"
                                    alt="Salesforce"
                                />
                                <img
                                    src="/Images/AllTech/Next.js.png"
                                    className="w-32 object-contain"
                                    alt="Salesforce"
                                />
                                <img
                                    src="/Images/AllTech/ReactNative.png"
                                    className="w-32 object-contain"
                                    alt="Salesforce"
                                />
                                <img
                                    src="/Images/AllTech/Tailwind.png"
                                    className="w-32 object-contain"
                                    alt="Salesforce"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative w-full mt-5 lg:mt-10 overflow-hidden">
                    <div className="marquee2 flex items-center gap-16">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="flex items-center gap-16 shrink-0">
                              <img
                                    src="/Images/AllTech/HTML.png"
                                    className="w-32 object-contain"
                                    alt="Microsoft"
                                />
                                <img
                                   src="/Images/AllTech/CSS.png"
                                    className="w-32 object-contain"
                                    alt="Oracle"
                                />
                                <img
                                    src="/Images/AllTech/Flutter.png"
                                    className="w-32 object-contain"
                                    alt="Salesforce"
                                />
                                <img
                                    src="/Images/AllTech/Next.js.png"
                                    className="w-32 object-contain"
                                    alt="Salesforce"
                                />
                                <img
                                    src="/Images/AllTech/ReactNative.png"
                                    className="w-32 object-contain"
                                    alt="Salesforce"
                                />
                                <img
                                    src="/Images/AllTech/Tailwind.png"
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

export default AllTechStacks;
