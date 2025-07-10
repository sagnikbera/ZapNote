import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Archive from "./pages/Archive/Archive";
import ThemeProvider from "./components/ThemeProvider";
import Important from "./pages/Important/Important";
import Bin from "./pages/Bin/Bin";

function App() {
  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/important" element={<Important/>} />
          <Route path="/bin" element={<Bin/>} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
