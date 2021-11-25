import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../components/main/Main";
import { API_GUAJOLOTAS } from "../helpers/API";
import Product from "../components/product/Product";
import Search from "../components/Search";
import ShoppingCart from "../components/ShoppingCart";

function AppRouter() {
  return (
    <div className="AppRputer">
      <Router>
        <Routes>
          <Route path="/" element={<Main link={API_GUAJOLOTAS} />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default AppRouter;