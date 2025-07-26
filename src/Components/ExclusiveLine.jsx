import React from 'react'

function ExclusiveLine() {
  return (
    <div>
        <div className='text-center my-10'>
            <h1 className='font-bold text-2xl'>Exclusive Line</h1>
        </div>
        <div className='flex justify-center gap-7.5'>
            <div className='cursor-pointer overflow-hidden'>
                <img src="/images/imgi_22_premium_zen-banner_01_720x.png" alt=""
                className='h-93 w-xl object-cover transition-all duration-500 ease-in-out hover:scale-105'
              />
            </div>
            
            
            <div className='object-fit cursor-pointer overflow-hidden'>
                 <img src="/images/imgi_23_premium_zen-banner_02_720x.png" alt="" 
                 className='h-90 w-xl object-cover transition-all duration-500 ease-in-out hover:scale-105'/>
            </div>
              
        </div>
    </div>
  )
}

export default ExclusiveLine
