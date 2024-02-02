import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Product from "./components/Product";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  const getApparel = useCallback(async () => {
    try {
      const response = await axios.get("https://api.prolook.com/api/v1-0/materials/categoryByID/2");
      setProducts(response.data.materials);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(()=>{
    getApparel();
  },[getApparel])
  return (
    <div className="main">
       <Product products={products} />
    </div>
  );
}

export default App;
