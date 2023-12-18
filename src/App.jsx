import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./assets/pages/Home";
import Portfolio from "./assets/pages/Porfolio";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
