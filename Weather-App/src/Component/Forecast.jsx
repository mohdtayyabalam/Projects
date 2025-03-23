import React, { useEffect, useState } from "react";

const Forecast = ({ceil, city, location}) => {
  const [forcastData, setForcastData] = useState([]);
  const [cel, setCel] = useState(true)

  const fetchedData = (city="ahmedabad") => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=3&appid=d3e75c9e8d59aff419e7767008463985`)
      .then((res) => res.json())
      .then((res) => setForcastData(res.list));
  };

  useEffect(() => {
    fetchedData();
  }, []);

  useEffect(() => {
    setCel(ceil)
    fetchedData(city)
  }, [ceil, city]);

  useEffect(()=>{
    if(location.lat && location.lon){
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&cnt=3&appid=d3e75c9e8d59aff419e7767008463985`)
        .then((res) => res.json())
        .then((res) => setForcastData(res.list));
    }   
  }, [location])


  return (
    <div className="mt-10">
      <h5 className="mb-5 text-xl font-semibold text-center">3 HOUR FORECAST</h5>
      <hr />
      <div className="flex justify-around gap-2 mt-5">
        {forcastData.map((item) => {
          return (
            <div key={item.dt} className="flex flex-col items-center gap-2">
              <p className="text-xl">{
                new Date(item.dt * 1000).toLocaleDateString('en-US',{weekday:'long'})}
                </p>
              <p>
                <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="" />
              </p>
              <p className="text-2xl font-semibold">{cel?`${Math.round(item.main.temp-273)}°C`:`${Math.round((item.main.temp * 1.8)-459.67)}°F`}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forecast;
