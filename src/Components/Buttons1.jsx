import React from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import { RiCheckboxBlankCircleLine  } from "react-icons/ri";

export default function Buttons1() {
     const navigate = useNavigate();
     const location = useLocation();

     const toMen = () => {
        navigate('/men')
     }
     const toWomen = () => {
        navigate('/women')
     }

     const isMen = location.pathname === ('/men');
     const isWomen = location.pathname === ('/women');
  return (
    <div className='text-center text-sm font-semibold hover:pointer'>
      <button onClick={toMen}
       className={`p-0.5 cursor-pointer ${isMen ? 'text-black' : 'text-gray-500'} `} ><RiCheckboxBlankCircleLine  /></button>
      <button onClick={toWomen}
       className={`p-0.5 cursor-pointer ${isWomen ? 'text-black' : 'text-gray-500'}`} ><RiCheckboxBlankCircleLine  /></button>
    </div>
  )
}
