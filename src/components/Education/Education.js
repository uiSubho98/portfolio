import React from 'react';
import education from '../../Assets/Education.jpg'

const Education = () => {
    return (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-2'>
            <div>
                <h2 className='text-5xl text-primary mt-5 ml-14'>Education</h2>
                <div>
                <p className='ml-14 mt-5 font-bold'>Secondary Examination</p><br></br>
                <div className='ml-14 mt-[-8px]'>
                <p><span className='font-bold'>School</span>-Bholananda National Vidyalaya </p>
                <p><span className='font-bold'>Year</span>- 2014 </p>
                <p><span className='font-bold'>CGPA</span>-7.0 out of 10 </p>
                
                </div>
                </div>
                <div>
                <p className='ml-14 mt-5 font-bold'>Higher Secondary Examination</p><br></br>
                <div className='ml-14 mt-[-8px]'>
                <p><span className='font-bold'>School</span>-Bholananda National Vidyalaya </p>
                <p><span className='font-bold'>Year</span>- 2016 </p>
                <p><span className='font-bold'>CGPA</span>-7.3 out of 10 </p>
                </div>
                </div>
                <div>
                <p className='ml-14 mt-5 font-bold'>B.tech in Electrical Engineering</p><br></br>
                <div className='ml-14 mt-[-8px]'>
                <p><span className='font-bold'>College</span>-JIS College Of Engineering</p>
                <p><span className='font-bold'>Year</span>- 2020-2023 </p>
                <p><span className='font-bold'>CGPA</span>-9.2 </p>
                </div>
                </div>
            </div>
            <div className='lg:mr-5 sm:mr-0 ' >
                <img src={education}  alt="" />
            </div>
        </div>
    );
};

export default Education;