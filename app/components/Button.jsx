import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Button = ({ text }) => {
  return (
    <Link href={"/"}>
      <button className="group button-wrapper border-gray-300 text-black hover:border-black btn btn-wide bg-white hover:bg-white">
        <div className="flex items-center justify-between gap-1">
          <div className="h-6 overflow-hidden">
            <span className="inline-block text-lg btn-text-content transition-transform duration-500 ease-in-out group-hover:animate-[moveUpInitial_0.3s_forwards,moveUpEnd_0.3s_forwards_0.23s]">
              {text}
            </span>
          </div>
          <FontAwesomeIcon
            className="h-4 transition -rotate-45 group-hover:rotate-0"
            icon={faArrowRight}
          />
        </div>
      </button>
    </Link>
  );
};

export default Button;
