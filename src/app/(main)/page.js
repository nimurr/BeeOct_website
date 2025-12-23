'use client';
import AllTechStacks from '@/Components/Home/AllTechStacks';
import Hero from '@/Components/Home/Hero';
import OurIndustryExpertise from '@/Components/Home/OurIndustryExpertise';
import Services from '@/Components/Home/Services';
import React from 'react';

const Page = () => {


    return (
        <div className=''>

            <section id="home">
                <Hero />
            </section>
            <section id="services">
                <Services />
            </section>
            <section id="industry-expertise">
                <OurIndustryExpertise />
            </section>
            <section id="techstacks">
                <AllTechStacks />
            </section>


        </div>
    );
}

export default Page;
