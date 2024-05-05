"use client";
import { useInView } from 'react-intersection-observer';

export default function Steps() {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

    return (
        <div ref={ref}>
            <div className={`buy ${inView ? "buy-visible" : ""}`}>
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
