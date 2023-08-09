import React from 'react'
import CarSearch from './components/CarSearch'
import Footer from './components/Footer'

function App() {

  return (
    <>
     <div >
      <h1 className='text-center' style={{ fontFamily: 'Staatliches, regular', textDecoration: 'underline' }}>Car Search App</h1>
      <CarSearch />
      <Footer />
     </div>
    </>
  )
}

export default App
