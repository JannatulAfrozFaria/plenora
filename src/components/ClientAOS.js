"use client"; 

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function ClientAOS() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return null;
}

// import React from 'react';

// const ClientAOS = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default ClientAOS;