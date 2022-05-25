import React from 'react';
import image1 from '../../Assets/image-1.png'

const About = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={image1} class="w-[50%] rounded-lg" />
          <div>
            <h1 class="text-5xl font-bold">About Me</h1>
            <p class="py-6">I'm an experienced fullstack web developer,living in West Bengal.My interest in Web Development sparked during first year of my college. I later worked several frontend projects and two MERN stack projects.In 2021, i started working as a coding tutor in Code Karo Yaro.Currently pursuing B.Tech in Elkectrical Engineering</p>
          </div>
        </div>
      </div>
    );
};

export default About;