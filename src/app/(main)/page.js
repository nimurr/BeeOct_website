'use client';
import Hero from '@/Components/Home/Hero';
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


        </div>
    );
}

export default Page;
