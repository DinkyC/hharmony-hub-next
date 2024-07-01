"use client";
import Image from "next/image";
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Hero() {
    const { ref, inView } = useInView({
        threshold: 0.60,
        triggerOnce: true
    });

    return (
        <div ref={ref} className="py-20 lg:py-0 hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div 
                className={`transition-opacity duration-2500 ${inView ? 'opacity-100' : 'opacity-0'} flex justify-center items-center lg:w-3/5 2xl:w-3/6 shadow-2xl bg-dark-red glass rounded-xl`}
                style={{ transitionDelay: `0.1s` }}
            >
                <Image
                  priority={true}
                  width={500}
                  height={500}
                  alt="Mezcal bottle"
                  src="/ht-mezcal-hero.webp"
                  className={`transition-opacity duration-2500 ${inView ? 'opacity-100' : 'opacity-0'} lg:h-[60vh] w-auto`}
                  style={{ transitionDelay: `0.2s` }}
                />
             </div>
            <div className="lg:mr-10 text-center lg:w-3/5 2xl:w-2/5 2xl:mr-28 lg:text-start">
              <h1 
                className={`transition-opacity duration-2500 ${inView ? 'opacity-100' : 'opacity-0'} py-6 text-3xl sm:text-5xl font-bold leading-relaxed`}
                style={{ transitionDelay: `0.4s` }}
                >
                High Times Products!
              </h1>
              <p 
                className={`transition-opacity duration-2500 ${inView ? 'opacity-100' : 'opacity-0'} leading-loose py-6 lg:py-14`}
                style={{ transitionDelay: `0.6s` }}
                >
                Discover High Times branded products like you&apos;ve never seen them before, offering an unparalleled mix of quirky charm and wholesome goodness for your ultimate chill.
              </p>
              <a href="#form"><button className="text-lg bg-red-400 hover:bg-red-600 hover:text-white btn btn-wide glass">Contact Us</button></a>
            </div>
          </div>
        </div>
    );
}
