import React from 'react'
import CarSearch from './components/CarSearch'
import Footer from './components/Footer'

function App() {

  return (
    <div>
    <header className="text-center py-4">
        <h1 className="text-center" style={{ fontFamily: 'Staatliches, regular', textDecoration: 'underline' }}>
          Car Search App
        </h1>
      </header>
      <CarSearch />
      <Footer />
     </div>
  )
}

export default App
