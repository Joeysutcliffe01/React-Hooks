// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import  { Home } from './pages/Home';
import {Details} from './pages/Details'
import { useState } from 'react';
import Data from "./data/Data.json";

function App() {
  // const [card, setCard] = useState()
  console.log("Data", Data);
  Data.map((item) => {
    return console.log(item.name)
  })
  return (
    <>

    {/* <h1>Hey</h1> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
