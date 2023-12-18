import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./assets/pages/Home";
import Portfolio from "./assets/pages/Porfolio";
import OnProgress from "./assets/pages/OnProgress";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/onprogress" element={<OnProgress />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
