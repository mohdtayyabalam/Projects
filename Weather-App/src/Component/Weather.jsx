import React, { use, useEffect, useState } from "react";
import { FaThermometerQuarter } from "react-icons/fa";
import { BsDropletFill } from "react-icons/bs";
import { TbWind } from "react-icons/tb";
import { BsFillSunriseFill } from "react-icons/bs";
import { BsFillSunsetFill } from "react-icons/bs";
import Timing from "./Timing";
import Input from "./Input";
import Forecast from "./Forecast";

const Weather = ({ mode }) => {
  const [allData, setAllData] = useState({});
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [temp, setTemp] = useState();
  const [weather, setWeather] = useState();
  const [realFeel, setRealFeel] = useState();
  const [humidity, setHumidity] = useState();
  const [wind, setWind] = useState();
  const [icon, setIcon] = useState();
  const [sunrise, setSunrise] = useState();
  const [sunset, setSunset] = useState();
  const [inputCity, setInputCity] = useState();
  const [isCel, setIsCel] = useState(true);
  const [location, setLocation] = useState({
    lat: "",
    lon: "",
  });

  const fetchingData = async (city = "ahmedabad") => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d3e75c9e8d59aff419e7767008463985`
      );
      if (!response.ok) {
        throw new Error("City not found");
      } else {
        const data = await response.json();
        setAllData(data);
      }
    } catch {
      alert("Enter Valid City");
    }
  };

  useEffect(() => {
    fetchingData(inputCity);
  }, [inputCity]);

  useEffect(() => {
    if (location.lat && location.lon) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=d3e75c9e8d59aff419e7767008463985`
      )
        .then((res) => res.json())
        .then((res) => setAllData(res));
    }
  }, [location]);

  useEffect(() => {
    setCity(allData.name);

    if (allData.main) {
      setTemp(allData.main.temp);
      setRealFeel(allData.main.feels_like);
      setHumidity(allData.main.humidity);
    }

    if (allData.weather) {
      setWeather(allData.weather[0].main);
      setIcon(allData.weather[0].icon);
    }

    if (allData.sys) {
      setCountry(allData.sys.country);
      const sunriseTime = allData.sys.sunrise;
      const indianTimeSunrise = new Date(
        sunriseTime * 1000
      ).toLocaleTimeString();
      setSunrise(indianTimeSunrise);
      const sunsetTime = allData.sys.sunset;
      const indianTimeSunset = new Date(sunsetTime * 1000).toLocaleTimeString();
      setSunset(indianTimeSunset);
    }

    if (allData.wind) {
      setWind(allData.wind.speed);
    }
  }, [allData]);

  return (
    <div>
      <Input
        inputCity={setInputCity}
        isCel={setIsCel}
        location={setLocation}
        mode={mode}
      />
      <Timing dt={allData.dt} />
      <div className="w-full text-center font-semibold text-5xl mb-5">
        <p>
          {city}, {country}
        </p>
      </div>
      <div className="w-full text-center mt-7 text-3xl">{weather}</div>
      <div className="flex flex-col md:flex-row justify-around items-center mt-6 gap-2 w-full">
        <div className="flex items-center justify-between w-[60%] md:w-[40%] gap-4">
          <div>
            <img
              src={`https://openweathermap.org/img/wn/${icon}.png`}
              className="w-[100%] h-20"
              alt=""
            />
          </div>
          <div className="text-5xl font-semibold pl-10">
            {isCel
              ? `${Math.round(temp - 273)}°C`
              : `${Math.round(temp * 1.8 - 459.67)}°F`}
          </div>
        </div>

        <div className="flex flex-col gap1">
          <div className="flex items-center gap-1">
            <p>
              <FaThermometerQuarter size={20} />
            </p>
            <p>Real Feel: </p>
            <p>
              {isCel
                ? `${Math.round(realFeel - 273)}°C`
                : `${Math.round(realFeel * 1.8 - 459.67)}°F`}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <p>
              <BsDropletFill size={20} />
            </p>
            <p>Humidity: </p>
            <p>{humidity}%</p>
          </div>
          <div className="flex items-center gap-1">
            <p>
              <TbWind size={20} />
            </p>
            <p>Wind: </p>
            <p>{wind} m/s</p>
          </div>
        </div>
      </div>
      <div className="flex justify-around mt-10 gap-2">
        <div className="flex items-center gap-2">
          <p>
            <BsFillSunriseFill size={24} />
          </p>
          <p>Sunrise: </p>
          <p className="font-semibold">{sunrise} IST</p>
        </div>
        <div className="flex items-center gap-2">
          <p>
            <BsFillSunsetFill size={24} />
          </p>
          <p>Sunset: </p>
          <p className="font-semibold">{sunset} IST</p>
        </div>
      </div>
      <Forecast ceil={isCel} city={city} location={location} />
    </div>
  );
};

export default Weather;
