import React,{useState} from 'react'

function Mencarousel() {
  return (
    <div className='w-screen h-auto flex items-center justify-center mb-10'>
        <div className='w-7xl items-center flex h-[300px]'>
          <div className='flex gap-4.5 w-full h-full justify-center'>
            <div>
                <img src="public\images\Men\1.jpg" alt="" className='w-full h-65 object-cover'/>
            <p className='text-sm hover:text-blue-500'>Men's Stylish Tassle Loafers</p>
            <p className='text-red-500'>Rs.3,000.00</p>
            
            </div>
            

            <div>
                <img src="public\images\Men\1.jpg" alt="" className='w-full h-65 object-cover'/>
            <p>Men's Stylish Tassle Loafers</p>
            <p>Rs.3,000.00</p>
           </div>   

            <div>
                <img src="public\images\Men\1.jpg" alt="" className='w-full h-65 object-cover'/>
            <p>Men's Stylish Tassle Loafers</p>
            <p>Rs.3,000.00</p>
           </div> 

            <div>
                <img src="public\images\Men\1.jpg" alt="" className='w-full h-65 object-cover'/>
            <p>Men's Stylish Tassle Loafers</p>
            <p>Rs.3,000.00</p>
            </div>

          </div>
        </div>
      
    </div>
  )
}

export default Mencarousel
