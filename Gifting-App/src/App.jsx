import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import GiftCard from "./Components/GiftCard";
import Login from './Components/Login'
import Shop from "./Components/Shop";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./Components/About";
import { useEffect, useState } from "react";

function App() {

  const [cartItem, setCartItem] = useState([])
  const [inputData, setInputData] = useState('')


  return (
    <>
      <BrowserRouter>
        <Navbar cartItem={cartItem} setInputData={setInputData} setCartItem={setCartItem}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/shop" element={<Shop setCartItem={setCartItem} cartItem={cartItem} inputData={inputData}/>} />
          <Route path="/giftcard" element={<GiftCard />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
