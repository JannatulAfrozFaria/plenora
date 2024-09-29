"use client"; 
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosConfig() {
  useEffect(() => {
    // Ensure AOS.init is only run on the client side
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 1000,
      });
    }
  }, []);

  return null;
}