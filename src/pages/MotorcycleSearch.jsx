import React, { useState, useEffect } from 'react';
import axios from 'axios';

//Use State for make and model search bars to get car specs
function MotorcycleSearch() {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [motorcycleData, setMotorcycleData] = useState([]);

  //Use Effect to populate the results as info is typed in
  useEffect(() => {
    fetchData();
  }, [make, model]);


    //Motorcycle from RapidAPI fetching data with axios
  const fetchData = async () => {
    const options = {
      method: 'GET',
      url: 'https://motorcycles-by-api-ninjas.p.rapidapi.com/v1/motorcycles',
      params: {
        make: make,
        model: model,
      },
      headers: {
        'X-RapidAPI-Key': '48ecb2c10amsh699aa641a9a45b3p13bc01jsn1ae890ade1ad',
        'X-RapidAPI-Host': 'motorcycles-by-api-ninjas.p.rapidapi.com',
      },
    };

    //Try and catch method to test the api 
    try {
      const response = await axios.request(options);
      setMotorcycleData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  //Function to be used on lowercase info to update with uppercase
  const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

   //Renderrrrrr
  return (
    <div className="container mt-5 pt-10 mx-auto" style={{ fontFamily: 'Staatliches, regular' }}>
      <div className="row justify-content-center mb-4">
        <div className="col-md-4">
          <input
            type="text"
            value={make}
            onChange={(e) => setMake(e.target.value)}
            className="form-control"
            placeholder='Try "Harley-Davidson"'
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="form-control"
            placeholder='Try "Sportster"'
          />
        </div>
      </div>
      {motorcycleData.length > 0 && (
        <div>
          <h3>Motorcycle Results:</h3>
          {motorcycleData.map((motorcycle, index) => (
            <div key={index} className="card my-3">
              <div className="card-body d-flex flex-column">
                <h1 className="card-text text-center mb-3.5">{capitalizeFirstLetter(motorcycle.make)}</h1>
                <h2 className="card-text text-center mb-5">{capitalizeFirstLetter(motorcycle.model)}</h2>
                <div className="d-flex justify-content-between fs-5">
                  <p className="card-text">Year - {motorcycle.year}</p>
                  <p className="card-text">Type - {motorcycle.type}</p>
                  <p className="card-text">Engine - {motorcycle.engine}</p>
                  <p className="card-text">Power - {motorcycle.power}</p>
                  <p className="card-text">Torque - {motorcycle.torque}</p>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MotorcycleSearch;
