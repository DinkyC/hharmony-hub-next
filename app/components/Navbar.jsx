'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import CustomSidebar from './CustomSidebar'; // Assuming CustomSidebar is a component



export default function Navbar({ children }) {

  const [isVisible, setIsVisible] = useState(false);

  const changeVis = () => {
    setIsVisible(!isVisible);
  };

  const [small, setSmall] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      console.log(currentScrollY);
      if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        if (currentScrollY > 100) {
          setSmall(true);
          setIsVisible(false);
        }
      } else {
        // Scrolling up
        setSmall(false);
        setIsVisible(false);
      }
      console.log(lastScrollY.current);
      lastScrollY.current = currentScrollY;
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <nav className={`z-10 flex fixed items-center justify-start w-[100vw] bg-regal-brown h-[7vh] opacity-90 transition-transform duration-300 ease-in-out ${small ? "-translate-y-full" : "translate-y-0"}`}>
      <Image priority src="/hhubspot-logo.webp" alt="Harmony Hubspot Logo" fill className="logo ml-16" />
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

