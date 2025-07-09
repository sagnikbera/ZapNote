import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Archive from "./pages/Archive/Archive";

function App() {
  return (
    <>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive/>} />
      </Routes>
    </>
  );
}

export default App;
