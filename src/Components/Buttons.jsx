import React from 'react';
import { useNavigate,useLocation } from 'react-router-dom';

function Buttons() {
 const navigate = useNavigate();
 const location = useLocation();

 const toMen = () => {
  navigate('/men');
 }

 const toWomen = () => {
  navigate('/women');
 }

 const isMen = location.pathname === '/men';
 const isWomen = location.pathname === '/women';
  return (
    <div className='text-center m-5 '>
      <button onClick={toMen}
        className={`px-6 py-2 rounded-3xl m-3.5  hover:border-1 hover:text-black ${isMen ? 'border-1 text-black' :'text-gray-500'}`} >Men</button>
      <button onClick={toWomen}
        className={`px-6 py-2 rounded-3xl  hover:border-1 hover:text-black ${isWomen ? 'border-1 text-black' : 'text-gray-500'}`} >Women</button>
    </div>
  )
}

export default Buttons
