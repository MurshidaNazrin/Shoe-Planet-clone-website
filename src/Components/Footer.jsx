import React from 'react'
import { CiMail } from "react-icons/ci";
import { PiInstagramLogoLight } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { SlPhone } from "react-icons/sl";

function Footer() {
    return (
    <div>
        <div className='bg-gray-100 p-20 mt-15'>
          <div className='flex justify-start gap-20'>  
            {/* 1 */}
            <div>
                <h3 className='text-md font-semibold mb-5.5'>Get in touch</h3>
                <ul className='text-gray-500'>
                    <li className='mb-3 cursor-pointer'>
                        <div className='flex gap-1.5 text-sm'>
                            <span className='text-xl font-light' >
                                <CiMail />
                            </span>
                            <span className='hover:text-blue-400'>
                                info@shoeplanet.pk
                            </span>
                            
                        </div>
                    </li>

                    <li className='mb-3 cursor-pointer'>
                        <div className='flex gap-1.5 text-sm'>
                            <span className='text-2xl'>
                                <SlPhone />
                            </span>
                            042-7839027
                        </div>
                    </li>

                    <li className='mb-3 cursor-pointer'>
                        <div className='flex gap-3.5 text-sm'>
                            <span className='text-lg hover:text-blue-800 transition-transform duration-300 hover:-translate-y-2'>
                                <FaFacebookF />
                            </span>
                            <span className='text-lg hover:text-blue-400 transition-transform duration-300 hover:-translate-y-2'>
                                <PiInstagramLogoLight />
                            </span>
                        </div>
                    </li>
                </ul>
            </div>

{/* 2 */}

      <div>
         <h3 className='text-md font-semibold mb-5.5'>Get Help</h3>
         <ul className='text-gray-500 text-sm'>
            <li className='mb-3 cursor-pointer hover:text-blue-400'>Shipping & Delivery</li>
            <li className='mb-3 cursor-pointer hover:text-blue-400'>Return & Exchange Policy</li>
            <li className='mb-3 cursor-pointer hover:text-blue-400'>Privacy Policy</li>
            <li className='mb-3 cursor-pointer hover:text-blue-400'>Terms & Conditions</li>
         </ul>
      </div>

      {/* 3 */}
         <div>
            <h3 className='text-md font-semibold mb-5.5'>Information</h3>
            <ul className='text-gray-500 text-sm'>
            <li className='mb-3 cursor-pointer hover:text-blue-400'>Reviews</li>
            <li className='mb-3 cursor-pointer hover:text-blue-400'>Size Guid</li>
            <li className='mb-3 cursor-pointer hover:text-blue-400'>FAQs</li>
            <li className='mb-3 cursor-pointer hover:text-blue-400'>Search</li>
            </ul>
         </div>
         </div>
        </div>

        <div className='m-4 ms-50 text-gray-500 text-md'>
            <p>Copyright © 2025 <span className='text-blue-400'>Shoe Planet</span>  all rights reserved.</p>
        </div>
    </div>    
    )
}

export default Footer
