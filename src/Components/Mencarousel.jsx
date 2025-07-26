// import React,{useState} from 'react'

// function Mencarousel(){
//    const [index, setIndex] = useState(0);

//     const data = [
//         {
//         image: "/images/Men/1.jpg",
//         title: "Men's Tassled Formal Shoes",
//         price: "Rs.3,000.00",
//         },

//          {
//         image: "/images/Men/2.jpg",
//         title: "Modern Leather peshwari chappal",
//         price: "Rs.1,500.00",
//         },

//          {
//         image: "/images/Men/3.jpg",
//         title: "Leather formal for men",
//         price: "Rs.3,000.00",
//         },

//           {
//         image: "/images/Men/4.jpg",
//         title: "Leather formal for men",
//         price: "Rs.3,000.00",
//         },

//          {
//         image: "/images/Men/5.jpg",
//         title: "Men's Twin Tassle Formals",
//         price: "Rs.3,000.00",
//         },

//          {
//         image: "/images/Men/6.jpg",
//         title: "Men's stylish Tassle Loafers",
//         price: "Rs.1,200.00",
//         },

//          {
//         image: "/images/Men/7.jpg",
//         title: "Men's premium Formals",
//         price: "Rs.4,800.00",
//         },
//     ];
   
//     const cardsPerView = 4;
//     const cardWidth = 260;
//     const maxIndex = Math.ceil(data.length/cardsPerView) - 1;
    
//     const prev = () => {
//       setIndex(prev => (prev > 0 ? prev -1: prev ));
//     };

//     const next =() => {
//       setIndex(prev => (prev < maxIndex ? prev +1 : prev));
//     }

//     // const visibleCards = data.slice(index * cardsPerView, index * cardsPerView + cardsPerView);
//     //  const visibleCards = Array.from({ length: cardsPerView }, (_, i) => {
//     // const dataIndex = (index + i) % data.length;
//     // return data[dataIndex];

//     //  })

//   return (
//     <div className=' w-screen h-auto flex items-center justify-center mb-10 overflow-hidden'>



//         <div className='relative w-[75%] items-center flex h-[300px] px-4'>
         
//           <div className='overflow-hidden flex gap-4 w-full h-full justify-center transition-transform duration-500 ease-in-out'
//           style={{transform:`translateX(-${index * cardsPerView * cardWidth}px)`}}>
//              {data.map((item, i) => {
//               return(
//                 <div key={i} className="w-64 min-w-[250px]">
//                  <img src={item.image} alt="" className='w-full h-65 object-cover'/>
//             <p className='text-sm hover:text-blue-500'>{item.title}</p>
//             <p className='text-red-500'>{item.price}</p>
//               </div>
//               )
//              })}
               
//           </div>

//    <button
//           onClick={next}
//           className=" w-12 h-12 rounded-full border-2 text-black absolute right-60
//           hover:bg-blue-400 transition hover:text-white hover:border-0"
//         >
//           »
//         </button>
          
//         <button
//           onClick={prev}
//           className=" w-12 h-12 rounded-full border-2 text-black absolute left-60
//           hover:bg-blue-400 transition hover:text-white hover:border-0"
//         >
//           «
//         </button>
//         </div>
      
//     </div>
//   );
// }

// export default Mencarousel

import React, { useState } from 'react';

function Mencarousel() {
  const [index, setIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);

  const data = [
    { image: "/images/Men/1.jpg", image1: "/images/Men/1.1.jpg", title: "Men's Tassled Formal Shoes", price: "Rs.3,000.00" },
    { image: "/images/Men/2.jpg", image1:"/images/Men/2.2.jpg", title: "Modern Leather peshwari chappal", price: "Rs.1,500.00" },
    { image: "/images/Men/3.jpg", image1:"/images/Men/3.3.jpg", title: "Leather formal for men", price: "Rs.3,000.00" },
    { image: "/images/Men/4.jpg", image1:"/images/Men/4.4.jpg", title: "Leather formal for men", price: "Rs.3,000.00" },
    { image: "/images/Men/5.jpg", image1:"/images/Men/5.5.jpg", title: "Men's Twin Tassle Formals", price: "Rs.3,000.00" },
    { image: "/images/Men/6.jpg", image1:"/images/Men/6.6.jpg", title: "Men's stylish Tassle Loafers", price: "Rs.1,100.00" },
    { image: "/images/Men/7.jpg", image1:"/images/Men/7.7.jpg", title: "Men's premium Formals", price: "Rs.4,800.00" },
  ];

  const cardsPerView = 4;
  const extendedData = [...data, ...data.slice(0, cardsPerView - 1)];
  const cardWidth = 260 + 16; 
  const offset = index * cardWidth;
  const maxIndex = data.length;

  const prev = () => {
    setIndex((prev) => (prev - 4) % maxIndex);
  };

  const next = () => {
    setIndex((prev) => (prev + 4) % maxIndex);
  };

  return (
    <div className="w-screen flex items-center justify-center mb-10 overflow-hidden">
      <div className="relative w-[70%] max-w-6xl flex items-center px-4">

        {/* Left Button */}
        <button
          onClick={prev}
          className="absolute left-0 -translate-x-full top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-black bg-white text-black flex items-center justify-center hover:bg-blue-400 hover:text-white hover:border-0 transition z-10"
        >
          &#8249;
        </button>

        {/* Card container with transform */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {extendedData.map((item, i) => (
              <div key={i} className="w-[260px] flex-shrink-0 px-2">
                <div className='overflow-hidden'>

                  <img src={hoverIndex === i && item.image1 ? item.image1 : item.image } alt={item.title} className="w-full h-56 object-cover rounded transition-all duration-1000 ease-in-out hover:scale-105"
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex(null)} />
                </div>
                
                <p className="text-sm hover:text-blue-500 mt-2">{item.title}</p>
                <p className="text-red-500">{item.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={next}
          className="absolute right-0 translate-x-full top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-black bg-white text-black flex items-center justify-center  hover:bg-blue-400 hover:text-white hover:border-0  transition z-10"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}

export default Mencarousel;
