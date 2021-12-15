import React from "react";
import ReactDOM from "react-dom";

import "./styles/main.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NavBar from "./components/NavBar";
import SearchPage from "./pages/SearchPage/SearchPage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
