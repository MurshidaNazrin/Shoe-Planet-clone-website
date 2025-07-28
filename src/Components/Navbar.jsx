import React from 'react';

import { CiSearch } from "react-icons/ci";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

function Navbar() {
  return (
    <div>
       <nav>
            {/* firsthead */}
           <div className='w-full h-10 bg-[rgb(110,107,108)]'>
            <p className='text-white text-center py-2.5  text-[0.87rem] cursor-pointer'>Rs.250 Shipping Charges - No Return or Exchange on 70% off articles.</p>
           </div>
 
 {/* second head*/}
       <div className='flex items-center justify-between bg-white w-full px-6 py-4'>
         <div>
            <img src="./images/logo.png" alt="logo" className='h-10 cursor-pointer'/>
          </div>
            
              <ul className='flex gap-6 items-center'>
                <li className='text-red-700 hover:text-blue-500'>
                  <a href="#">Season End Sale</a>
                </li>
                <li className='relative group hover:text-blue-500'>
                  <a href="#" className='block px-4 py-2'>New Arrival</a>

                    <ul className='absolute left-0 mt-2 w-60 p-6 bg-white shadow-lg hidden group-hover:block z-10'>
                      <li className='my-5 text-gray-500 text-md cursor-pointer hover:text-black'><a href="#">Men</a></li>
                      <li className='my-5 text text-gray-500 text-md cursor-pointer hover:text-black'><a href='#'>Women</a></li>
                    </ul>
                  </li>

                <li className='relative group hover:text-blue-500'>
                  <a href="#" className='block px-4 py-2'>Men</a>

                  <ul className='absolute left-0 mt-2 w-60 p-6 bg-white shadow-lg hidden group-hover:block z-10'>
                    <li className='relative group my-5 text-gray-500 text-md cursor-pointer hover:text-black '>
                      <a href="#" className='block px-4 py-2'>Men Shoes</a>
                         
                         {/* <ul className='absolute top-0 left-full mt-0 w-60 p-6 bg-white shadow-lg hidden group-hover:block z-20 pointer-events-auto'>
                          <li className='my-5 text-gray-500 text-md cursor-pointer hover:text-black '><a href="">All Products</a></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                         </ul> */}
                      </li>
                  </ul>   
                  </li>
                <li className='relative group hover:text-blue-500'>
                  <a href="#" className='block px-4 py-2'>Women</a>

                   <ul className='absolute left-0 mt-2 w-60 p-6 bg-white shadow-lg hidden group-hover:block z-10'>
                     <li className='relative group my-5 text-gray-500 text-md cursor-pointer hover:text-black '>
                        <a href="#" className='block px-4 py-2'>Women Shoes</a>
                     </li>
                   </ul>
                </li>

                </ul>

             <ul className='flex gap-4 items-center text-2xl'>
              <li className='cursor-pointer hover:text-blue-500'><CiSearch /></li>
              <li className='curser-pointer hover:text-blue-500 flex gap-1'><PiShoppingCartSimpleLight />
              <div className='h-5 w-5 shadow-2xl rounded-full bg-black text-white text-center text-sm'>0</div>
              </li>
              </ul>   
           
       </div>

        {/* <div className='w-screen h-auto bg-gray-500 text-center text-white text-xl font-semibold py-10'>Season End Sale</div> */}

        </nav> 
    </div>
  );
}

export default Navbar
