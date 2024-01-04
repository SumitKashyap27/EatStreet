
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Carousel from "./component/Navbar";
import Home from "./component/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="carousel" element={<Carousel />} />
          <Route path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
