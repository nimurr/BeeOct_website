'use client';
import AllTechStacks from '@/Components/Home/AllTechStacks';
import Hero from '@/Components/Home/Hero';
import OurIndustryExpertise from '@/Components/Home/OurIndustryExpertise';
import OurProduct from '@/Components/Home/OurProduct';
import OurServices from '@/Components/Home/OurServices';
import Services from '@/Components/Home/Services';
import React from 'react';

const Page = () => {


    return (
        <div className=''>

            <section id="home">
                <Hero />
            </section>
            <section id="pertnerships">
                <Services />
            </section>
            <section id="products">
                <OurProduct />
            </section>

            <section id="industry">
                <OurIndustryExpertise />
            </section>
            <section id="techstacks">
                <AllTechStacks />
            </section>
            <section id="services">
                <OurServices />
            </section>


        </div>
    );
}

export default Page;
