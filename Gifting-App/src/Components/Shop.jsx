import React, { useEffect, useState } from "react";
import axios from "axios";

const Shop = ({ setCartItem, cartItem, inputData }) => {
  const [allData, setAllData] = useState([]);
  const [limit, setLimit] = useState(12);
  const [category, setCategory] = useState("");
  let selectedValue = "";

  const fetchingData = () => {
    axios
      .get(`https://dummyjson.com/products?limit=${limit}`)
      .then((res) => setAllData(res.data.products));
    setCategory("");
  };

  const handleLoadMore = () => {
    const newLimit = limit + 6;
    setLimit(newLimit);
  };

  const handlePrice = (e) => {
    selectedValue = e.target.value;
    if (selectedValue == "High-to-Low") {
      axios
        .get(`https://dummyjson.com/products?sortBy=price&order=desc`)
        .then((res) => setAllData(res.data.products));
    } else if (selectedValue == "Low-to-High") {
      axios
        .get(`https://dummyjson.com/products?sortBy=price&order=asc`)
        .then((res) => setAllData(res.data.products));
    } else if (selectedValue == "Recommended") {
      axios
        .get(`https://dummyjson.com/products?limit=${limit}`)
        .then((res) => setAllData(res.data.products));
    }
  };

  const handleCart = (id, title, price, images) => {
    let res = cartItem.map((item) => {
      if (item.id == id) {
        return {
          ...item,
          amount: item.amount + 1,
        };
      } else {
        return item;
      }
    });

    const itemExists = cartItem.some((item) => item.id === id);

    if (!itemExists) {
      res.push({
        id: id,
        title: title,
        price: price,
        image: images,
        amount: 1,
      });
    }

    setCartItem(res);
  };

  useEffect(() => {
    fetchingData();
  }, []);

  useEffect(() => {
    if (category == "") {
      fetchingData();
    }
  }, [limit]);

  useEffect(() => {
    if (category) {
      axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((res) => setAllData(res.data.products));
    }
  }, [category]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/search?q=${inputData}`)
      .then((res) => setAllData(res.data.products));
  }, [inputData]);

  return (
    <div className="bg-[#f9f2ea]">
      <div className="flex gap-5 w-full pt-20 pb-20 ">
        <div className="w-[10%] pl-5">
          <p className="font-bold pb-5">Browse by</p>
          <hr className="pb-5" />
          <p
            onClick={() => {
              let newLimit = 12;
              setLimit(newLimit);
              fetchingData();
            }}
            className="pb-5 font-light cursor-pointer"
          >
            All Products
          </p>
          <p
            onClick={() => setCategory("beauty")}
            className="pb-5 font-light cursor-pointer"
          >
            beauty
          </p>
          <p
            onClick={() => setCategory("home-decoration")}
            className="pb-5 font-light cursor-pointer"
          >
            home-decoration
          </p>
          <p
            onClick={() => setCategory("mens-shirts")}
            className="pb-5 font-light cursor-pointer"
          >
            mens-shirts
          </p>
          <p
            onClick={() => setCategory("mens-watches")}
            className="pb-5 font-light cursor-pointer"
          >
            mens-watches
          </p>
          <p
            onClick={() => setCategory("smartphones")}
            className="pb-5 font-light cursor-pointer"
          >
            smartphones
          </p>
          <p
            onClick={() => setCategory("sunglasses")}
            className="pb-5 font-light cursor-pointer"
          >
            sunglasses
          </p>
        </div>

        <div className=" flex flex-col flex-wrap gap-5 w-[90%] pl-10">
          <div className="flex flex-row gap-2 pl-10">
            <p>Sort by Price: </p>
            <select
              onChange={handlePrice}
              name=""
              id=""
              className="rounded outline-none bg-transparent"
            >
              <option value="Recommended">Recommended</option>
              <option value="High-to-Low">High to Low</option>
              <option value="Low-to-High">Low to High</option>
            </select>
          </div>
          <div className="flex flex-row items-center justify-center flex-wrap gap-5">
            {allData.length ? (
              allData.map((item) => {
                return (
                  <div key={item.id} className="flex flex-col gap-3">
                    <img
                      src={item.images[0]}
                      alt="product-image"
                      className=" w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-gray-200 rounded-md"
                    />
                    <p className="">{item.title}</p>
                    <p>${Math.round(item.price)}.00</p>
                    <div>
                      <button
                        onClick={() =>
                          handleCart(
                            item.id,
                            item.title,
                            item.price,
                            item.images[0]
                          )
                        }
                        className="border w-40 h-9 rounded-xl bg-[#ca3e02] text-white"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="flex items-center justify-center">
                <img className="w-[400px] h-[400px]" src="./nothing.webp"></img>
              </div>
            )}
          </div>
        </div>
      </div>
      {allData.length && <div className="w-full text-center pb-10">
        <button
          onClick={handleLoadMore}
          className="w-[300px] h-10 rounded-xl bg-[#ca3e02] text-white text-xl"
        >
          Load More
        </button>
      </div>}
    </div>
  );
};

export default Shop;
