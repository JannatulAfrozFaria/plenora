"use client"; 
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
AOS.init();

const AosConfig = ({children}) => {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
      return (
          <div>
              {children}
          </div>
      );
  };
export default AosConfig;