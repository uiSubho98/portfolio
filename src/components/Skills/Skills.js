import React from 'react';
import skill from '../../Assets/skiils.jpg'

const Skills = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
  <img src={skill} class="w-[50%] rounded-lg" />
    <div>
      <h1 class="text-5xl font-bold">SKILLS!</h1>
      <h1 class="text-2xl mt-5 font-bold">Expertise</h1>
      <p class="">JavaScript, ES6, React, React Router, React Bootstrap, HTML, CSS, Bootstrap.</p>
      <h1 class="text-2xl mt-5 font-bold">Comfortable</h1>
      <p class="">Node.js, Express.js, MongoDB, Rest API, Context API, Firebase authentication.</p>
      <h1 class="text-2xl mt-5 font-bold">Familiar</h1>
      <p class="">Tailwind CSS, Daisy UI, Kommunicate</p>
      <h1 class="text-2xl mt-5 font-bold">Tools</h1>
      <p class="">Git, VS Code, Chrome Dev Tools, GitHub,  Netlify, Firebase, Heroku
</p>
    </div>
  </div>
</div>
    );
};

export default Skills;