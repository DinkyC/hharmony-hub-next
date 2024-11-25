"use client";
import { useInView } from 'react-intersection-observer';

export default function Steps() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

    return (
        <div className='pt-12' ref={ref}>
            <div className={`transition-all duration-[1500ms] relative ${inView ? "left-0" : "-left-full"} top-0 w-screen`}>
                <div className="buy-sect">
                    <div className="circle-container">
                        <div className="circle"><span>1</span></div>
                        <span className="circle-text">Sum the product quantity</span>
                    </div>
                    <div className="circle-container">
                        <div className="circle"><span>2</span></div>
                        <span className="circle-text">Note your contact info</span>
                    </div>
                    <div className="circle-container">
                        <div className="circle"><span>3</span></div>
                        <span className="circle-text">Fill the form below</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
