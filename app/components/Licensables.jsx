'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faWineBottle } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';

export default function Licensables() {
    const { ref, inView } = useInView({
        threshold: 0.15,
        triggerOnce: true
    });
   const classNames = "h-16 mb-5 xl:h-20";
   const products = [
        {
            title: "Edible Pet Products",
            svg: (
                <FontAwesomeIcon className={classNames} icon={faPaw} />
            ),
            descrip: "Dog biscuits; Edible cat treats; Edible dog treats; Edible pet treats; Cat food; Dog food; Pet food; Pet beverages",        
        },
       {
            title: "Alcoholic Beverages",
            svg: (
                <FontAwesomeIcon className={classNames} icon={faWineBottle} />
            ),
            descrip: "Mezcal; Alcoholic beverages except beers; Distilled spirits; Liquors, spirits and liqueurs; Distilled agave liquor; Distilled blue agave liquor; beer; mead, wine, alcoholic cider",
       }
   ]

   return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
       {products.map((item, index) => (
            <div
                ref={ref}
                className={`transition-opacity duration-2500 ${inView ? 'opacity-100' : 'opacity-0'} flex flex-col sm:px-10 ${ index == 0 ? '' : 'pt-16' } sm:pt-0`}
                key={index}
                style={{ transitionDelay: `${index * 0.2}s` }}
            >
                {item.svg}
                <span className="italic pb-2 text-lg sm:text-xl lg:text-2xl xl:text-3xl">{item.title}</span>
                <div className="mt-5 bg-base-200 flex justify-center items-center rounded-lg leading-loose shadow-xl h-56">
                    <p className="px-3 min-[800px]:text-lg lg:text-xl xl:text-2xl lg:leading-9 xl:leading-[3rem]">{item.descrip}</p>
                </div>
            </div>
       ))}
    </div>
   ); 
}
