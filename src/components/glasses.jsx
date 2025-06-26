import React, { useState } from 'react';
import data from './data.json';

function Glasses() {
  const [glassesList] = useState(data);
  const [selectedGlass, setSelectedGlass] = useState(data[0]);

  const renderModel = () => {
    return (
      <div className="flex flex-col md:flex-row justify-center gap-12 mb-12">
     
        <div className="relative w-[250px]">
          <img
            src="/glassesImage/model.jpg"
            alt="model"
            className="w-full rounded-xl shadow-lg"
          />
          <img
            src={selectedGlass.url}
            alt="selected glass"
            className="absolute top-[68px] left-[57px] w-[135px] opacity-90 transition duration-300"
          />
          <div className="absolute bottom-0 left-0 w-full bg-orange-500 bg-opacity-80 text-white text-sm p-4 rounded-b-xl">
            <p className="font-bold text-base">{selectedGlass.name}</p>
            <p className="text-xs">{selectedGlass.desc}</p>
          </div>
        </div>

  
        <div className="w-[250px]">
          <img
            src="/glassesImage/model.jpg"
            alt="model without glasses"
            className="w-full rounded-xl shadow-lg opacity-80"
          />
        </div>
      </div>
    );
  };

  const renderGlassesList = () => {
    return (
      <div className="flex flex-wrap gap-5 justify-center bg-white bg-opacity-90 shadow-xl rounded-xl p-6 max-w-5xl mx-auto">
        {glassesList.map((glass) => (
          <div
            key={glass.id}
            className="p-2 bg-white rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer"
            onClick={() => setSelectedGlass(glass)}
          >
            <img
              src={glass.url}
              alt={glass.name}
              className="w-[110px] h-auto rounded"
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[url('/glassesImage/background.jpg')] bg-cover bg-center flex flex-col items-center py-12 px-4">
    <h1 className="text-4xl font-bold text-black drop-shadow mb-10">
      TRY GLASSES APP ONLINE
    </h1>
  
    <div className="backdrop-blur-md bg-black rounded-xl shadow-2xl p-6 mb-10">
      {renderModel()}
    </div>
  
  
    <div className="backdrop-blur-md bg-black rounded-xl shadow-xl p-6">
      {renderGlassesList()}
    </div>
  </div>
  
  );
}

export default Glasses;
