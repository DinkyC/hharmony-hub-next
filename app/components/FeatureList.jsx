'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faFileSignature, faListCheck } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';

export default function FeatureList() {
    const { ref, inView } = useInView({
        threshold: 0.35,
        triggerOnce: true
    });
    const classNames = ` h-8 mb-3 sm:h-10 lg:mb-6 lg:h-12`;
    const features = [
        {
            svg: <FontAwesomeIcon className={classNames} icon={faBoxOpen} />,
            name: "Product Sales",
            descr: "Either it be online or retail we bring unique product offerings to market."
        },
        {
            svg: <FontAwesomeIcon className={classNames} icon={faFileSignature} />,
            name: "Licensing",
            descr: "We choose and target opportunities that capitalize on existing brand equity."
        },
        {
            svg: <FontAwesomeIcon className={classNames} icon={faListCheck} />,
            name: "IP Management",
            descr: "Our team has extensive expertise in IP, covering trademarks, copyrights, and patents."
        }
    ];

    return (
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3">
            {features.map((feature, index) => (
                <div
                    ref={ref}
                    className={`transition-opacity duration-2500 ${inView ? 'opacity-100' : 'opacity-0'} ${ index == 0 ? '' : 'pt-10'  } lg:pt-0 text-start ${ index == 2 ? '' : 'lg:mr-10' }`}
                    key={index}
                    style={{ transitionDelay: `${index * 0.2}s` }}
                >
                    <div className="flex flex-col justify-start items-start">
                        {feature.svg}
                        <span className={` font-bold sm:text-xl lg:text-2xl`}>{feature.name}</span>
                    </div>
                    <p className={` pt-2 sm:text-lg`}>{feature.descr}</p>
                </div>
            ))}
        </div>
    );
}

