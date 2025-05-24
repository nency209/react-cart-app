import { useEffect, useState } from "react";
import Header from "./components/header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import Productlist from "./components/data";

function App() {
  const [producatid, setproducatid] = useState("");
  const [cartAllProduct, setCartAllProduct] = useState([]);

  useEffect(() => {
    const filterobject = Productlist.filter(
      (producat) => producat.id === producatid
    );
    setCartAllProduct([...cartAllProduct, ...filterobject]);
  }, [producatid]);

  
  

  return (
    <>
      <Header />
      < Outlet context={{
          cartAllProduct,
          setCartAllProduct,
          setproducatid,
        }}/>
    </>
  );
}

export default App;
