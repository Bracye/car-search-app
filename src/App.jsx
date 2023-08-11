import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CarSearch from './pages/CarSearch';
import MotorcycleSearch from './pages/MotorcycleSearch';
import Main from './pages/Main';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div style={{maxWidth: '1200px', margin: '0 auto', boxShadow: '0 0 10px rgba(0, 0, 0, 0.8)'}}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cars/" element={<CarSearch />} />
        <Route path="/motorcycles/" element={<MotorcycleSearch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
