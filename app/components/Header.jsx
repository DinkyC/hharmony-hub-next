'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import CustomSidebar from './CustomSidebar'; // Assuming CustomSidebar is a component



export default function Header({ children }) {

  const [isVisible, setIsVisible] = useState(false);

  const changeVis = () => {
    setIsVisible(!isVisible);
  };

  const [small, setSmall] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        if (currentScrollY > 200) {
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
    <nav className={`headerSect opacity-90 transition-transform duration-300 ease-in-out ${small ? "-translate-y-full" : "translate-y-0"}`}>
      <Image src="/hhubspot-logo.webp" alt="Harmony Hubspot Logo" width={500} height={300} className="logo ml-16" />
      <button onClick={changeVis} aria-label="Toggle menu" className="flex absolute items-center justify-center h-5 w-10 left-0 p-0 pl-2">
        <FontAwesomeIcon className="icon1" style={{ height: "30px" }} icon={faBars} />
      </button>
      <CustomSidebar isVisible={isVisible}>
          <button onClick={changeVis} aria-label="Close menu" className="hover:text-white pt-2 right-0 flex absolute items-center justify-center h-5 w-10 p-0 pl-2">
            <FontAwesomeIcon className="icon1" style={{ height: "30px" }} icon={faTimes} />
          </button>
      </CustomSidebar>
      {children}
    </nav>
  );
}

