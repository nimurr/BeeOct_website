'use client';
import Hero from '@/Components/Home/Hero';
import Section from '@/Components/Home/Section';
import React from 'react';

const Page = () => {


    return (
        <div className='container flex flex-col gap-5 md:gap-10 mx-auto'>

            <Section>
                <section id="home">
                    <Hero />
                </section>
            </Section>

           
        </div>
    );
}

export default Page;
