'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
export default function Sidebar() {
  const [small, setSmall] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        if (currentScrollY > 100) {
          setSmall(true);
        }
      } else {
        // Scrolling up
        setSmall(false);
      }
      lastScrollY.current = currentScrollY;
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

   return (
        <div className={`z-10 fixed drawer opacity-90 transition-transform duration-300 ease-in-out ${small ? "-translate-y-full" : "translate-y-0"}`}>
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="w-full navbar bg-regal-brown">
              <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
              </div>
              <Image src="/hhubspot-logo.webp" alt="Harmony Hubspot Logo" width={500} height={300} className="logo" />
              <div className="flex-1 px-2 font-bold text-lg md:text-xl"><a href="/">Harmony Hubspot</a></div>
              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal">
                  {/* Navbar menu content here */}
                  <li>
                    <details>
                      <summary className="text-base">
                        Products
                      </summary>
                      <ul className="p-2 bg-base-100 rounded-t-none">
                        <li><a href="/pets">Pets</a></li>
                        <li><a href="/enhancers">Enhancers</a></li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </div>
            </div>

          </div> 
          <div className="drawer-side z-50">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 min-h-full bg-light-regal">
              {/* Sidebar content here */}
              <li><a href="/">Home</a></li>
              <li>
                <details>
                  <summary>
                    Products
                  </summary>
                  <ul className="p-2 bg-base-100 rounded-t-none">
                    <li><a href="/pets">Pets</a></li>
                    <li><a href="/enhancers">Enhancers</a></li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
   ); 
}
