import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Mencarousel from './Components/Mencarousel';
import Womencarousel from './Components/Womencarousel';
import Buttons from './Components/Buttons';
import  Buttons1 from './Components/Buttons1';
import ExclusiveLine from './Components/ExclusiveLine';
import Collections from './Components/Collections';
import BestSellers from './Components/BestSellers';
import Footer from './Components/Footer';
import Sale from './Components/Sale';
import { BrowserRouter,Routes,Router, Route } from 'react-router-dom';




function App() {
  

  return (
    <>
    <BrowserRouter>
     <Navbar/>
     <Home/>
     <Buttons />
     <Routes>
        <Route path='/men' element={<Mencarousel />} />
        <Route path='/women' element={<Womencarousel />} />
     </Routes>
     <Buttons1 />
     <ExclusiveLine />
     <Collections/>
     <BestSellers />
     <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
