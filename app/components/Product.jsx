"use client";
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Product({ brand, title, descr, bene1, bene2, bene3, bene4, price, isAlt, photo }) { 
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
        <div className={className}>
            <div className="title-photo-sect">
                <div className="title-sect">
                    <h3><b>{brand}</b></h3>
                    <h3>{title}</h3>
                </div>
                <Image src={photo} alt={`${title}`} width={500} height={500} className="productPhoto" />
            </div>
            <div className="info-sect">
                <div className="title-sect-mobile">
                    <h3><b>{brand}</b></h3>
                    <h3 className="pb-5">{title}</h3>
                </div>
                <div className="product-descr">
                    <p>{descr}</p>
                </div>
                <div className="bene-sect">
                    <ul className="benefits">
                        <li>{bene1}</li>
                        <li>{bene2}</li>
                        <li>{bene3}</li>
                        <li>{bene4}</li>
                    </ul>
                </div>
                <div ref={ref} className="price-sect">
                    <span className="price">{displayPrice}</span>
                </div>
            </div>
        </div>
    );
}

