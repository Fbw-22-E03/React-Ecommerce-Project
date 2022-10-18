import { useState } from "react";
import "./styles/main.scss";
import styled from "styled-components";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import ProductsPaginate from "./components/ProductsPaginate";
import Registration from "./components/user/Registration";
import Login from "./components/user/Login";
import NavBar from "./components/main-page/NavBar";
import CoverPhoto from "./components/main-page/CoverPhoto";
import Payment from "./components/purchases/Payment";
import Context from "./functions/Context";
import Product from "./components/Product";
import CartCardComponent from "./components/purchases/CartCardComponent";
import FetchContext from "./functions/fetchContext";


function App() {
  return (
    <Context>
      <FetchContext>
        <BrowserRouter>
          <div className="App">
            <NavBar />
            {/* <CartCardComponent /> */}
            <CoverPhoto />
            {/* <Product /> */}

            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/" element={<Registration />} />
              {/* <Route path="/" element={<CoverPhoto />} /> */}
              <Route path="/Product" element={<Product />} />
              <Route path="/ShoppingCart" element={<CartCardComponent />} />
            </Routes>
          </div>
        </BrowserRouter>
      </FetchContext>
    </Context>
  );
}

export default App;
