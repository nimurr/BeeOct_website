import React from 'react';
import Section from './Section';

const Hero = () => {
    return (
        <div className='min-h-[100vh] relative'>
            <img className='w-full absolute bottom-1/2 lg:bottom-0 left-0' src="/Images/Home/Hero/sideShadow.png" alt="" />
            <Section>
                <div className=' container h-full md:pt-20 pt-10  mx-auto flex flex-col justify-center items-center'>
                    <h2 className='italic text-2xl lg:text-3xl text-center'>We Are Here To</h2>
                    <h1 className='text-6xl lg:leading-[1.1] my-5 lg:my-10 lg:text-[100px] text-center font-semibold'>Make Your <span className='text-primary'>Dream</span> <br />Become <span className='text-primary'>Reality</span></h1>
                    <p className='text-center text-gray-400'>We blend intelligence, creativity, and collaboration to craft <br />digital products that grow, connect, and inspire.</p>
                    <div className='mt-10 flex justify-center items-center gap-5'>
                        <button className='bg-white text-primary hover:bg-primary hover:text-white shadow-[0_0_10px_#0059ff]  px-6 py-3 rounded-full text-base font-medium  transition'>Schedule a Call</button>
                        <button className='bg-primary text-white px-6 py-3 rounded-full text-base font-medium hover:bg-gray-200 hover:text-primary transition'>See Our Projects</button>
                    </div>
                </div>
            </Section>
            <Section>
                <div>
                    <img className='w-full lg:mt-0 mt-5' src="/Images/Home/Hero/banner_image.png" alt="" />
                </div>
            </Section>
        </div>
    );
}

export default Hero;
