"use client";
import { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

import React from 'react'

export default function SctollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 120 ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  };
  return (
    <button className=" size-12 fixed scrollToTop bg-main text-2xl text-white" onClick={scrollToTop}><MdKeyboardArrowUp/</button>
  )
}
