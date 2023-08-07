import React, { useState } from 'react'
import axios from 'axios'

function CarSearch() {
  // Setting state for the data
  const [make, setMake] = useState('')
  const [model, setModel] = useState('')
  const [carData, setCarData] = useState([])

  //API Key to get the data
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

  //Search function to get the data
  const handleSearch = () => {
    fetchData();
  };


  return (
    <div>

      <div>
        {/* //Make input */}
        <input
          type="text"
          value={make}
          onChange={(e) => setMake(e.target.value)}
          placeholder="Enter car make"
        />
        {/* //Model input */}
        <input
          type="text"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Enter car model"
        />
        {/* //Search button */}
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* //Results to get properties data */}
      {carData.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          {carData.map((car, index) => (
            <div key={index}>
              <p>Make: {car.make}</p>
              <p>Model: {car.model}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default CarSearch