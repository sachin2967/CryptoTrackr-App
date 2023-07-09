import React from 'react';

const VerticalStrip = () => {
    const email = 'sachinyadav2967@gmail.com';
  return (
    <div className="vertical-strip bg-black text-white text-center fixed-top d-flex justify-content-between">
      <div><a href=''>Developed by: Sachin Yadav</a></div>
      <div className="m-0">Welcome to our website!</div>
      <div className='d-flex flex-row-reverse'>
      <div ><a href={`mailto:${email}`}> Email </a></div>
      <div className='me-1'><a href="#" target="_blank" > LinkedIn  </a></div>
      <div className='me-1'><a href="#" target="_blank" > GitHub  </a></div>
      </div>
      </div>
   
  );
};

export default VerticalStrip;