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


function App() {
  return (
    <Context>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/home" element={<CoverPhoto />} />
          </Routes>

          {/* <ProductsPaginate /> */}
        </div>
      </BrowserRouter>
    </Context>
  );
}

export default App;
