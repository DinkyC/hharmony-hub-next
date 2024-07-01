'use client';
import { FeatureList, Licensables } from "../components/index";
import { useTyping } from "../utils/helpers";

export default function About() {
   const word = useTyping({text: "High Times", delay: 200});
   const divider = "text-xl sm:text-2xl m-0 pb-10 md:pb-20 font-bold md:text-3xl lg:text-4xl";
   return (
    <>
        <section className="flex flex-col items-center justify-center py-24 text-center">
            <h1 className="font-bold text-2xl sm:text-3xl pb-[2vh] pt-[5vh] lg:py-[5vh] xl:text-5xl leading-relaxed md:text-4xl md:leading-[3rem]">
                Managing and Expanding the High Times Mark
            </h1>
            <div className="lg:w-2/3">
                <h2 className="text-lg md:text-2xl lg:text-3xl lg:leading-[3rem] lg:pt-10 pt-8 leading-relaxed ">
                    Yota, LLC operates as a dedicated holding company, managing and expanding the High Times trademarks within specific product categories.
                </h2>
            </div>
            <span 
                className="md:pt-20 timmana-regular py-20 text-5xl sm:text-6xl md:text-8xl -rotate-6 text-green-700"
            >
                {word}
            </span>
            <div className="pt-20 divider"></div>
            <div className="py-20">
                <h3 className={divider}>Expertise and Specialization</h3>
                <FeatureList />
            </div>
            <div className="divider"></div>
                <h4 className={divider}>Licensable High Times Products</h4>
                <Licensables />
        </section>
    </>
   ); 
}
