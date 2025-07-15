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
            <img src="./images/logo.png" alt="logo" className='h-10'/>
          </div>
            
              <ul className='flex gap-6 items-center'>
                <li className='text-red-700 hover:text-blue-500'><a href="#">Season End Sale</a></li>
                <li className='hover:text-blue-500'><a href="#">New Arrival</a></li>
                <li className='hover:text-blue-500'><a href="#">Men</a></li>
                <li className='hover:text-blue-500'><a href="#">Women</a></li>
                </ul>

             <ul className='flex gap-4 items-center text-2xl'>
              <li className='cursor-pointer hover:text-blue-500'><CiSearch /></li>
              <li className='curser-pointer hover:text-blue-500'><PiShoppingCartSimpleLight /></li>
              </ul>   
           
       </div>

        {/* <div className='w-screen h-auto bg-gray-500 text-center text-white text-xl font-semibold py-10'>Season End Sale</div> */}

        </nav> 
    </div>
  );
}

export default Navbar
