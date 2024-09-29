"use client";
import React from 'react';
import Title from '../utilityComponents/Title';
import Image from 'next/image';

const BlogPosts = () => {
    const blogs = [
        {
            id: 1,
            image: "https://i.ibb.co/VDCZnrQ/blog7.jpg",
            postingDate: "March 18, 2024",
            likes: 50,
            comments: 12,
            heading: "How to Choose the Right Colors for Your Bedroom",
            hashtags: ["#InteriorDesign", "#BedroomColors", "#DesignTips", "#HomeDecor"],
            description: `
            Choosing the right colors for your bedroom can be a transformative experience, as the colors you choose greatly impact your mood, sleep quality, and overall well-being. In this guide, we'll explore several factors to consider when picking the perfect color scheme for your personal sanctuary.
      
            **Understanding Color Psychology**
      
            The colors we surround ourselves with have a direct effect on how we feel. For instance, blue is known to promote calm and relaxation, making it a popular choice for bedrooms. On the other hand, bright colors like red and orange can be too energizing for a space meant for rest. Neutral tones like beige, gray, or soft pastels offer a more balanced feel, providing a peaceful backdrop without overwhelming the senses.
      
            **Lighting Matters**
      
            Natural and artificial lighting can significantly alter how a color looks in your bedroom. Before making a final decision, test paint samples on your walls at different times of day. This will allow you to see how light interacts with the color throughout the day. Consider the direction your room faces—north-facing rooms may benefit from warmer tones to counterbalance the cool, natural light.
      
            **Create Contrast with Accents**
      
            While a neutral color palette can establish a soothing atmosphere, accent colors add personality and depth. You can introduce contrast through bedding, cushions, curtains, or artwork. These accents can be easily swapped out if you want a fresh look without completely overhauling your bedroom design.
      
            **Textures and Finishes**
      
            Paint finishes also play a role in the overall aesthetic of your room. Matte finishes offer a subtle, soft look, while satin and eggshell finishes can reflect light, adding a hint of luxury. If you prefer a bold statement, consider an accent wall with a striking color or textured wallpaper.
      
            **Matching Your Style**
      
            Whether your style is modern, traditional, or eclectic, ensure that your bedroom colors reflect your personal taste. A minimalist design may benefit from monochromatic shades, while a more eclectic style can handle a mix of bold hues.
      
            In summary, the key to selecting the right colors for your bedroom is finding a balance between aesthetic appeal and comfort. Take your time to test different options, and don't be afraid to experiment with accents to make the space truly yours.
          `
        },
        {
            id: 2,
            image: "https://i.ibb.co/k4FrSSX/blog-2.jpg",
            postingDate: "February 25, 2024",
            likes: 25,
            comments: 8,
            heading: "The Power of Accent Lighting in Interior Design",
            hashtags: ["#LightingDesign", "#AccentLighting", "#InteriorDecor", "#DesignInspiration"],
            description: `
            Accent lighting is often the unsung hero of interior design. While natural lighting and overhead fixtures serve their purpose, accent lighting adds depth, focus, and atmosphere to any space. This guide will walk you through the benefits of accent lighting and how you can use it to elevate your home’s interior design.
      
            **Highlighting Architectural Features**
      
            One of the most effective uses of accent lighting is to highlight architectural details, such as textured walls, unique ceilings, or artwork. By casting focused light on these elements, you bring attention to the space’s unique features, making the room feel more dynamic and interesting.
      
            **Creating a Mood**
      
            Accent lighting is key in setting the mood of a room. Whether it’s the cozy glow from a table lamp or the dramatic effect of recessed lighting, the intensity and direction of light can transform how a room feels. For example, in living rooms, soft accent lighting can create a warm, welcoming atmosphere, while in dining rooms, it can make the space feel intimate and elegant.
      
            **Types of Accent Lighting**
      
            There are many types of accent lighting to consider, depending on the effect you wish to create. Wall sconces can draw the eye upward, adding height to a room, while floor lamps can illuminate dark corners without overwhelming the space. Pendant lights can also serve as accents, especially when placed above kitchen islands or in hallways.
      
            **Energy Efficiency and Technology**
      
            Modern accent lighting solutions often come with energy-efficient options, like LED bulbs, which offer both style and savings. Smart lighting systems also allow for greater control over brightness and color temperature, enabling you to adjust the mood with the touch of a button.
      
            **Layering with General Lighting**
      
            While accent lighting should be used to highlight specific areas, it works best when layered with other types of lighting, such as ambient and task lighting. For example, in a living room, ambient lighting can provide overall illumination, task lighting can focus on reading areas, and accent lighting can highlight artwork or architectural details.
      
            **Final Thoughts**
      
            Accent lighting plays a crucial role in interior design, helping to shape the mood and aesthetic of a space. Whether you're looking to enhance specific architectural features or simply create a more inviting atmosphere, thoughtful use of accent lighting can make all the difference.
          `
        },
        {
            id: 3,
            image: "https://i.ibb.co/hDkdkyJ/blog6.jpg",
            postingDate: "January 10, 2024",
            likes: 30,
            comments: 15,
            heading: "Custom Design Plans: Tailoring Your Space to Fit Your Lifestyle",
            hashtags: ["#CustomDesign", "#Architecture", "#PersonalizedSpaces", "#HomeDesign"],
            description: `
            Every home should be as unique as the people living in it, and custom design plans offer a way to ensure your space fits your lifestyle perfectly. In this article, we’ll explore the benefits of creating a custom design plan and how it can transform your home into a personalized sanctuary.
      
            **Understanding Your Needs**
      
            Before starting any design project, it's essential to assess how you use your space. Do you entertain often? Do you need a home office? How about outdoor living spaces? A custom design plan starts with understanding your needs and ensuring that every corner of your home serves a purpose.
      
            **Working with an Architect**
      
            An experienced architect can turn your vision into a reality, creating a design plan that incorporates both functionality and aesthetics. From the layout to the materials, every detail is tailored to reflect your personal style while ensuring the space is functional and efficient.
      
            **Maximizing Space and Functionality**
      
            A custom design plan allows you to make the most of your space, whether you live in a compact city apartment or a sprawling suburban home. By focusing on your specific requirements, architects can optimize the layout to include everything you need without wasting space.
      
            **Sustainability and Efficiency**
      
            Incorporating sustainable materials and energy-efficient solutions into your custom design plan can lower your carbon footprint and reduce utility costs. Solar panels, energy-efficient windows, and eco-friendly building materials are just a few ways to make your home more sustainable.
      
            **Incorporating Personal Style**
      
            One of the biggest advantages of a custom design plan is that it allows you to incorporate your unique style into every detail of your home. Whether you prefer modern minimalism, rustic charm, or eclectic design, a custom plan ensures that your home reflects your personality.
      
            **Conclusion**
      
            Custom design plans are an investment in both your home and your lifestyle. By tailoring your space to fit your specific needs and preferences, you create a home that is not only beautiful but also functional, sustainable, and entirely yours.
          `
        }
    ];

    return (
        <div>
            <Title subHeading={'Articles & Blogs'} heading={'Our Latest Blog Posts'}></Title>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {
                    blogs.map(blog =>
                        <div key={blog.id} className='grid grid-cols-1'>
                            <div className=''>
                                <Image width={400} height={200} src={blog.image} ></Image>
                            </div>
                            <div className='px-6 pb-3 md:pb-6 shadow-xl'>
                                <div className='flex justify-between items-center text-gray py-3 md:py-2'>
                                    <p>{blog.postingDate} </p>
                                    <p>{blog.comments} Comments </p>
                                </div>
                                <a className='text-theme text-xl font-bold md:text-2xl ' href="/blogs">{blog.heading}</a>
                                {/* <h1> {blog.heading} </h1> */}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default BlogPosts;