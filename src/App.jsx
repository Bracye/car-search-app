import React from 'react'
import { Route, Routes } from "react-router-dom";
import CarSearch from './pages/CarSearch'
import MotorcycleSearch from './pages/MotorcycleSearch'
import Main from './pages/Main';
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
{/* Displays */}
  return (
   
    <div>
      <Header />
       <Routes>
      <Route path='/' element={<Main />} />
       <Route path='/Cars/' element={<CarSearch />} />
      <Route path='/Motorcycles' element={<MotorcycleSearch />} />
      </Routes>
      <Footer />
     </div>
  )
}

export default App
