import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Details } from "./pages/Details";
import { useState } from "react";
import { Data } from "./data/Data.js";

function App() {
  return (
    <>
      {/* <h1>Hey</h1> */}
      <Routes>
        <Route path="/" element={<Home Data={Data} />} />
        <Route path="/details/:id" element={<Details Data={Data} />} />
      </Routes>
    </>
  );
}

export default App;
