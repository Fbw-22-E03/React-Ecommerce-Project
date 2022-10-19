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
import ShoppingCart from "./components/purchases/ShoppingCart";
import Footer from "./components/main-page/Footer";
import UserInfo from "./components/user/UserInfo";
import Home from "./components/main-page/Home";
import LogoutSuccessPage from "./components/user/LogoutSuccessPage";

function App() {
  return (
    <Context>
      <FetchContext>
        <BrowserRouter>
          <div className="container-fluid" style={{ marginTop: "100px" }}>
            <NavBar />
            <div className="test">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/UserInfo" element={<UserInfo />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Registration" element={<Registration />} />
                <Route path="/Product" element={<Product />} />
                <Route path="/ShoppingCart" element={<ShoppingCart />} />
                <Route
                  path="/LogoutSuccessPage"
                  element={<LogoutSuccessPage />}
                />
              </Routes>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </FetchContext>
    </Context>
  );
}
export default App;
