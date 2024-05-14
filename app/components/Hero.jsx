"use client";
import Image from "next/image";
import React, { useEffect } from 'react';

export default function Hero() {

    useEffect(() => {
      let photos = document.getElementsByClassName("photo");
      for (let i = 0; i < photos.length; i++) {
        photos[i].classList.add("photo-visible");
      }
    }, []);


    return (
      <>
        <div className="sect-1">
            <div className="subsect-1">
                <h1 className="m-0">
                    Balancing Life&rsquo;s Essentials, Naturally.
                </h1>
                <p className="sub-text">
                    Elevating lifestyles with sustainable, nature-inspired products for holistic well-being.
                </p>
            </div>
            <div className="sub-text-mobile">
                <p>
                    Elevating lifestyles with sustainable, nature-inspired products for holistic well-being.
                </p>
            </div>
            <Image src="/hhubspot-hero2.webp" className="photo" alt="Nature" width={500} height={300}/>
        </div>
      </>
    );
}
