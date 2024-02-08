"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

// eslint-disable-next-line react/no-unescaped-entities
const HeroSection = () => {
  return (<section>
   <div className="grid grid-cols-1 sm:grid-cols-12">
    <div className="col-span-7 place-self-center text-center sm:text-left">
      <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold"> 
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Let's learn about{" "}
          </span>
        <br></br> 
        <TypeAnimation
      sequence={[
       
        'Java Concurrency API',
        1000,
        'Atomic Integer',
        1000,
        'Countdown Latch',
        1000,
        'Cyclic Barrier',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
        </h1>
      
      </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-[50%] bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image 
              src="/images/logo1.png"
              alt="hero image"
              className="absolute transform -translate-x-1/4 -translate-y-1/4 top-1/4 left-1/4"
              width={1000}
              height={1000}
            />
          </div>
       
          <div className="mt-4 lg:mt-8">
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection
