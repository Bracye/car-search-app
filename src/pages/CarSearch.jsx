import React, { useState, useEffect } from 'react';
import axios from 'axios';


//Use State for make and model search bars to get car specs
function CarSearch() {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [carData, setCarData] = useState([]);

  //Use Effect to populate the results as info is typed in
  useEffect(() => {
    if (!make && !model) {
      setCarData([]);
    } else {
      fetchData();
    }
  }, [make, model]);

  //CarAPI from RapidAPI fetching data with axios
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

    //Try and catch method to test the api 
    try {
      const response = await axios.request(options);
      console.log('Response:', response.data);
      setCarData(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  //Function to be used on lowercase info to update with uppercase
  const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  //Renderrrrrr
  return (
    // Styling the entire div and adding google fonts
    <div className="container mt-5 pt-10 mx-auto" style={{ fontFamily: 'Staatliches, regular' }}>
      {/* //Getting the content in the center */}
      <div className="row justify-content-center mb-4">
        {/* //Two inputs for make and model */}
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
              <div className="card-body d-flex flex-column">
                <h1 className="card-text text-center mb-3.5" >{capitalizeFirstLetter(car.make)}</h1>
                <h2 className="card-text text-center mb-5">{capitalizeFirstLetter(car.model)}</h2>
                <div className="d-flex justify-content-between fs-5" >
                  <p className="card-text">Year - {car.year}</p>
                  <p className="card-text">MPG - {car.city_mpg}</p>
                  <p className="card-text">Drive - {capitalizeFirstLetter(car.drive)}</p>
                  <p className="card-text">Cylinders - {car.cylinders}</p>
                  <p className="card-text">Car Class - {capitalizeFirstLetter(car.class)}</p>
                  <p className="card-text">Fuel Type - {capitalizeFirstLetter(car.fuel_type)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
     
    </div>
  );
}

export default CarSearch;
