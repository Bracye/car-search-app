import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './carStyling.css';

function CarSearch() {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [make, model]); // The useEffect hook will run whenever the 'make' or 'model' state changes

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
    <div>
      <div>
        <input
          type="text"
          value={make}
          onChange={(e) => setMake(e.target.value)}
          placeholder="Enter car make"
        />
        <input
          type="text"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Enter car model"
        />
        <button onClick={fetchData}>Search</button>
      </div>

      {carData.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          {carData.map((car, index) => (
            <div key={index}>
              <p>Make: {car.make}</p>
              <p>Model: {car.model}</p>
              <p>MPG: {car.city_mpg}</p>
              <p>Drive: {car.drive}</p>
              <p>Cylinders: {car.cylinders}</p>
              <p>Car Class: {car.class}</p>
              <p>Year: {car.year}</p>
              <p>Fuel Type: {car.fuel_type}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CarSearch;
