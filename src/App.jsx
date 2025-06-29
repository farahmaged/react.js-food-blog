import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Food from "./pages/Food";
import Drinks from "./pages/Drinks";
import BestRestaurants from "./pages/BestRestaurants";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<Food />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/restaurants" element={<BestRestaurants />} />
      </Routes>
    </Router>
  );
}

export default App;
