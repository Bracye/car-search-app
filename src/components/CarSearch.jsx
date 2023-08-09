import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/cyborg/bootstrap.min.css'
import CarImg from './CarImg';

function CarSearch() {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [make, model]);

  const fetchData = async () => {
    const options = {
      method: 'GET',
      url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
      params: {
        make: make,
        model: model,
      },
      headers: {
        'X-RapidAPI-Key': '48ecb2c10amsh699aa641a9a45b3p13bc01jsn1ae890ade1ad',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
      },
    };

    console.log('API Request Options:', options);

    try {
      const response = await axios.request(options);
      console.log('API Response:', response.data);
      setCarData(response.data);
    } catch (error) {
      console.error('API Error:', error);
    }
  };

    return (
    <div className="container mt-5 pt-10 mx-auto">
      <div className="row justify-content-center mb-4"> {/* Center the content horizontally */}
        <div className="col-md-4">
          <input
            type="text"
            value={make}
            onChange={(e) => setMake(e.target.value)}
            className="form-control"
            placeholder='Try "Ford"'
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="form-control"
            placeholder='Try "Fusion"'
          />
        </div>
    
      </div>


      {carData.length > 0 && (
  <div>
    <h3>Car Results:</h3>
    {carData.map((car, index) => (
      <div key={index} className="card my-3">
        <div className="card-body">
          <h1 className="card-text text-center">{car.make}</h1>
          <h2 className="card-text text-center">{car.model}</h2>
          <p className="card-text">Year: {car.year}</p>
          <p className="card-text">MPG: {car.city_mpg}</p>
          <p className="card-text">Drive: {car.drive}</p>
          <p className="card-text">Cylinders: {car.cylinders}</p>
          <p className="card-text">Car Class: {car.class}</p>
          <p className="card-text">Fuel Type: {car.fuel_type}</p>
        </div>
      </div>
    ))}
  </div>
)}
    </div>
  );
}

export default CarSearch;