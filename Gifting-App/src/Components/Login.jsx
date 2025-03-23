import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';

const Login = () => {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/')
  };
  return (
    <div className="bg-[url(./loginbg.jpg)] bg-cover h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-[#ca3e02] p-6 rounded-lg shadow-md w-80 text-center h-[400px] flex flex-col items-center justify-center"
      >
        <h2 className="text-white text-2xl mb-4">Login</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="mb-3 p-2 w-full border-none rounded-md outline-none text-lg"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="mb-3 p-2 w-full border-none rounded-md outline-none text-lg"
        />
        <button
          type="submit"
          className="bg-white text-[#ca3e02] p-2 w-full rounded-md font-bold cursor-pointer hover:bg-orange-200"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login