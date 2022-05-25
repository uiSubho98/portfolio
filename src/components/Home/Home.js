import React from 'react';
import image1 from '../../Assets/image-1.png'
import './Home.css'
import MyCv from '../../Assets/SubhojitDutta.jpg';


//

const Home = () => {
    
    return (
        <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={image1} class="w-[50%] rounded-lg" />
          <div>
            <h1 class="text-5xl font-bold name">Subhojit Dutta</h1>
            <div className="container">
            <h2 class="text-2xl font-bold title">
            <span class="title-word title-word-1">FullStack </span>
    <span class="title-word title-word-2">Web </span>
    <span class="title-word title-word-3">Developer</span>
            </h2>
            </div>
            <p class="py-2">I am a quick learner. I believe in hard work and efficiency. I always like to learn new technology and have experience with new things. Always ready to prove myself through my work and responsibility.
</p>

<a href={MyCv} className='btn btn-primary' download="My_File.jpg"> Download CV</a>
           
          </div>
        </div>
      </div>
    );
};

export default Home;