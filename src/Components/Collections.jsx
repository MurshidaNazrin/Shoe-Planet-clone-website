import React from 'react'

function Collections() {
  return (
    
    <div>
        <div className='text-center my-15'>
            <h1 className='font-bold text-2xl'>Collections</h1>
        </div>
        
       <div className='flex justify-between mx-7'>
        <div className='cursor-pointer overflow-hidden'>
            <img src="/images/imgi_24_Category-Banner-Men_95b70650-d9e8-4eb4-ad04-4958497fbca7_720x.png" alt="" 
            className='h-70 object-fit transition-all duration-1000 ease-in-out hover:scale-110'/>
        </div>

        <div className='cursor-pointer overflow-hidden'>
            <img src="/images/imgi_25_Category-Banner-Women_b8b92f37-ff4c-4626-a4c0-742f0c8f0f7e_720x.png" alt="" 
            className='h-70 object-fill transition-all duration-1000 ease-in-out hover:scale-110'/>
        </div>

        <div className='cursor-pointer overflow-hidden'>
            <img src="/images/imgi_26_category-banner-accessories_cdec79e8-c458-48be-bc57-10a75c07f249_720x.png" alt=""
            className='h-70 object-fit transition-all duration-1000 ease-in-out hover:scale-110' />
        </div>
    </div> 
  </div> 
  )
}

export default Collections
 