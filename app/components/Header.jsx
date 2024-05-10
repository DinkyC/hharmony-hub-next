'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import CustomSidebar from './CustomSidebar'; // Assuming CustomSidebar is a component



export default function Header({ children }) {

  const [isVisible, setIsVisible] = useState(false);

  const changeVis = () => {
    setIsVisible(!isVisible);
  };

  return (
    <nav className="headerSect opacity-95">
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

