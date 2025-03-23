import React, { useState } from "react";
import { BiCurrentLocation, BiSearch } from "react-icons/bi";

const Input = ({ inputCity, isCel, location, mode }) => {
  const [temp, setTemp] = useState("");

  const handleChange = (e) => {
    setTemp(e.target.value);
  };

  const handleCity = () => {
    inputCity(temp);
    setTemp("");
  };

  const handleCel = () => {
    isCel(true);
  };

  const handleFeh = () => {
    isCel(false);
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("not available");
    }
  };

  const showPosition = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    location({
      lat: lat,
      lon: lon,
    });
  };

  const handleLocationClick = () => {
    getLocation();
  };

  window.onload = getLocation;

  return (
    <div className="flex fles-row justify-center items-center px-5">
      <div className="flex flex-row p-2 items-center justify- gap-5 pl- w-3/4">
        <input
          type="text"
          placeholder="Enter Your City"
          onChange={handleChange}
          value={temp}
          className="w-2/3 h-12 focus:outline-none p-2 rounded"
        />
        <BiSearch size={30} onClick={handleCity} className="hover:scale-125" />
        <BiCurrentLocation
          onClick={handleLocationClick}
          size={30}
          className="hover:scale-125"
        />
      </div>
      <div className="flex flex-row items-center justify-center gap-5 w-1/4 ml-2">
        <button className="text-2xl hover:scale-125" onClick={handleCel}>
          C
        </button>
        <p className="text-3xl"> | </p>
        <button className="text-2xl hover:scale-125" onClick={handleFeh}>
          F
        </button>
      </div>
      {/* <div>
        <label class="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" onClick={()=>mode(!mode)} class="sr-only peer" />
          <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
        </label>
      </div> */}
    </div>
  );
};

export default Input;
