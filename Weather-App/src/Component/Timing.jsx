import React from "react";

const Timing = ({dt}) => {

  const time = new Date(dt * 1000).toLocaleTimeString()
  const date = new Date(dt * 1000).toLocaleDateString("en-US", {
    weekday: 'long',
    year:'numeric',
    month:'long',
    day:"numeric"
  })
  return (
    <div className="text-2xl font-light w-full mt-5 mb-5">
      <p className="text-center"> {date} | Local Time: {time} IST</p>
    </div>
  );
};

export default Timing;
