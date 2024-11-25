"use client";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Permanent_Marker } from "next/font/google";
import Link from "next/link";

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
export default function Product({
  title,
  descr,
  bene1,
  bene2,
  bene3,
  bene4,
  price,
  isAlt,
  category,
}) {
  const [displayPrice, setDisplayPrice] = useState(price);
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      let targetPrice = parseFloat(price.replace("$", ""));
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

  let className = isAlt
    ? "productTitle altProductTitle xl:pr-24"
    : "productTitle";

  const productName = title.toLowerCase().replaceAll(" ", "_");

  return (
    <div className="mb-10">
      <div
        className={`${className} pb-[10vh] lg:mb-[5vh] max-[624px]:bg-dark-red max-[624px]:card max-[624px]:glass`}
      >
        <div className="title-photo-sect">
          <div className="productPhoto flex flex-col max-[624px]:bg-dark-slate max-[624px]:bg-gradient-to-b max-[624px]:from-gray-200 max-[624px]:to-transparent justify-center items-center self-center w-[60vw] h-[40vh] lg:w-[50vw] lg:h-[65vh] xl:w-[40vw] m-0 mb-[5vh] mt-[3vh] rounded-br-lg shadow-2xl">
            <h1 className={`${permanentMarker.className} text-3xl lg:text-7xl`}>
              High Times<sup className="p-1 text-[1.5rem]">™</sup>
            </h1>
            <h3 className="pb-5 text-2xl lg:text-4xl text-center">{title}</h3>
          </div>
        </div>
        <div className="info-sect">
          <div className="pb-2">
            <p className="text-[1rem] lg:text-[2.0rem] leading-[2.5rem] lg:leading-[3.5rem] max-[624px]:mr-5 max-[624px]:ml-5 text-center">
              {descr}
            </p>
          </div>
          <div className="bene-sect">
            <ul className="benefits">
              <li>{bene1}</li>
              <li>{bene2}</li>
              <li>{bene3}</li>
              <li>{bene4}</li>
            </ul>
          </div>
          <div className="flex justify-center items-center flex-col">
            <div ref={ref} className="py-10">
              <span className="text-2xl lg:text-5xl font-bold">
                {displayPrice}
              </span>
            </div>
            <Link
              className="btn w-2/3 h-1/2 lg:h-4/5 shadow-md bg-red-400 hover:bg-red-600 hover:text-white text-xl lg:text-2xl"
              href={`/category/${category}/product/${productName}`}
            >
              <button>See Product</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
