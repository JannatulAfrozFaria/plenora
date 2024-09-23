import Image from 'next/image';
import React from 'react';

const WhatWeDo = () => {
    
        const services = [
          {
            "id": 1,
            "heading": "Home Interior Design",
            "description": "Transform your home with personalized interior designs, blending style and functionality.",
            "image": "https://example.com/images/home-interior-design.jpg"
          },
          {
            "id": 2,
            "heading": "Home Exterior Design",
            "description": "Enhance your home's curb appeal with modern, stylish exterior design solutions.",
            "image": "https://example.com/images/home-exterior-design.jpg"
          },
          {
            "id": 3,
            "heading": "2D/3D Design Layout",
            "description": "Visualize your space with our advanced 2D and 3D design layouts for a clear picture.",
            "image": "https://example.com/images/2d-3d-design-layout.jpg"
          },
          {
            "id": 4,
            "heading": "Furniture's Design",
            "description": "Custom furniture designs tailored to fit your space and style preferences seamlessly.",
            "image": "https://example.com/images/furniture-design.jpg"
          },
          {
            "id": 5,
            "heading": "Modern Home Interior",
            "description": "Bring modern elegance to your home with sleek, contemporary interior design solutions.",
            "image": "https://example.com/images/modern-home-interior.jpg"
          },
          {
            "id": 6,
            "heading": "Custom Design Plan",
            "description": "Get personalized design plans that suit your unique vision and lifestyle needs perfectly.",
            "image": "https://example.com/images/custom-design-plan.jpg"
          }
        ]
      
      
    return (
        <div>
            <div>
                <h1 className='text-gray font-bold'>What we do</h1>
                <h2 className="text-theme text-3xl md:text-6xl">The best Services We Provide</h2>
            </div>
            <div className="relative w-full h-[90vh] bg-no-repeat bg-cover"
                    style={{
                        backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7),rgba(0,0,0,0.3)), url('https://i.postimg.cc/ZYvpyK9Q/back-ash.png')` }}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 absolute top-6 ">
                    {services.map(service=>
                         <div key={service.id} className="grid grid-cols-2">
                         <div>
                            <Image></Image>
                         </div>
                         <div>
                             <h2>{service.heading}</h2>
                             <p> {service.description} </p>
                         </div>
                     </div>
                    )}
                    <div className="grid grid-cols-2">
                        <div></div>
                        <div>
                            <h2>Home Interior Design</h2>
                            <p></p>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default WhatWeDo;