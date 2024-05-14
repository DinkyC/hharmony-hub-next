"use client";
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Product({ brand, title, descr, bene1, bene2, bene3, bene4, price, isAlt, photo, photoSize }) { 
    const [displayPrice, setDisplayPrice] = useState(price);
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true
    });

    useEffect(() => {
        if (inView) {
            let targetPrice = parseFloat(price.replace('$', ''));
            let currentPrice = 0;
            let incrementStep = 0.2; // Adjust the increment step 
            let interval = setInterval(() => {
                currentPrice += incrementStep;
                if (currentPrice >= targetPrice) {
                    currentPrice = targetPrice; 
                    clearInterval(interval);
                }
                setDisplayPrice(`$${currentPrice.toFixed(2)}`);
            }, 20);
            return () => clearInterval(interval); // Clean up the interval on component unmount
        }
    }, [inView, price]);

    let className = isAlt ? "productTitle altProductTitle xl:pr-24" : "productTitle";
    return (
        <div className={`${className} max-[624px]:bg-dark-red max-[624px]:card max-[624px]:glass`} style={{ marginBottom: "8vh"}}>
            <div className="title-photo-sect">
                <div className="title-sect max-[624px]:mt-3">
                    <h3 className="timmana-regular text-2xl"><b>{brand}</b></h3>
                    <h3 className="text-lg">{title}</h3>
                </div>
                <div 
                    className="productPhoto flex max-[624px]:bg-dark-slate max-[624px]:bg-gradient-to-b max-[624px]:from-gray-200 max-[624px]:to-transparent justify-center items-center self-center w-[60vw] h-[40vh] lg:w-[50vw] lg:h-[65vh] xl:w-[40vw] m-0 mb-[5vh] mt-[3vh] rounded-br-lg shadow-2xl">
                    <Image src={photo} alt={`${title}`} width={500} height={500} className={`${photoSize} `} />
                </div>

            </div>
            <div className="info-sect">
                <div className="title-sect-mobile">
                    <h3 className="timmana-regular text-5xl"><b>{brand}</b></h3>
                    <h3 className="pb-5">{title}</h3>
                </div>
                <div className="product-descr ">
                    <p className="max-[624px]:mr-5 max-[624px]:ml-5">{descr}</p>
                </div>
                <div className="bene-sect">
                    <ul className="benefits">
                        <li>{bene1}</li>
                        <li>{bene2}</li>
                        <li>{bene3}</li>
                        <li>{bene4}</li>
                    </ul>
                </div>
                <div ref={ref} className="price-sect ">
                    <span className="price">{displayPrice}</span>
                </div>
            </div>
        </div>
    );
}

