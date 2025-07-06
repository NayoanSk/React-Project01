import React from 'react';



const HomePage = () => {

    return (
        <div className='flex flex-col justify-center items-center h-[90vh] text-amber-300 text-center' 
            style={{
                backgroundImage: "url('src/AllImages/banner.jpg')",
                backgroundSize: "cover",
                backgroundPosition : "center"
            }}>
            <h1 className='text-4xl md:text-6xl'>jonathon khubb</h1>
            <h3 className='text-large md:text-xl my-4'>photography</h3>
            <button className='border-0 bg-amber-300 rounded-2xl text-white px-3 cursor-pointer hover:text-black'>Buy Products</button>
        </div>
    );
};

export default HomePage;