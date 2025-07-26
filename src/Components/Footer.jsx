import React from 'react'
import { CiMail } from "react-icons/ci";
import { PiInstagramLogoLight } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { SlPhone } from "react-icons/sl";

function Footer() {
    return (
        <div className='bg-gray-100 p-25 mt-15'>
          <div className='flex justify-start gap-20'>  
            {/* 1 */}
            <div>
                <h3 className='text-md font-semibold mb-4.5'>Get in touch</h3>
                <ul className='text-gray-500'>
                    <li>
                        <div className='flex gap-1.5 text-md'>
                            <span className='text-2xl font-light' >
                                <CiMail />
                            </span>
                            info@shoeplanet.pk
                        </div>
                    </li>

                    <li>
                        <div className='flex gap-1.5 text-md'>
                            <span className='text-2xl'>
                                <SlPhone />
                            </span>
                            042-7839027
                        </div>
                    </li>

                    <li>
                        <div className='flex gap-1.5 text-md'>
                            <span className='text-lg'>
                                <FaFacebookF />
                            </span>
                            <span className='text-lg'>
                                <PiInstagramLogoLight />
                            </span>
                        </div>
                    </li>
                </ul>
            </div>

{/* 2 */}

      <div>
         <h3 className='text-md font-semibold mb-4.5'>Get Help</h3>
         <ul className='text-gray-500'>
            <li>Shipping & Delivery</li>
            <li>Return & Exchange</li>
            <li>Policy</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
         </ul>
      </div>

      {/* 3 */}
         <div>
            <h3 className='text-md font-semibold mb-4.5'>Information</h3>
            <ul className='text-gray-500'>
            <li>Reviews</li>
            <li>Size Guid</li>
            <li>FAQs</li>
            <li>Search</li>
            </ul>
         </div>
         </div>
        </div>
    )
}

export default Footer
