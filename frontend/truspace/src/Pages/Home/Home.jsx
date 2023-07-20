import React from 'react';
import Navbarr from '../../components/Home/Navbar';
import Sidebar from '../../components/Home/Sidebar';

function Home() {
  const sidebarStyle = {
    marginTop: '200px', // Use camelCase for CSS properties with multiple words
  };
  return (
    <div className='bg-blue-gray-400 h-full'>
        
       {/* <Navbarr></Navbarr>
       <Sidebar></Sidebar> */}
       
       <div className='flex flex-wrap w-96 bg-black'>
       <div className='w-full bg-blue-gray-500 sm:w-1/2 md:-1/3 lg:w-1/4 p-4'>
        hello
       </div>
       <div className='w-full bg-deep-orange-800 sm:w:1/2 md:w-1/3 lg:w-1/4 p-4'>
        heloooo
       </div>

       </div>
    </div>
  )
}

export default Home