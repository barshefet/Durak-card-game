import React from "react";
import { Routes, Route } from "react-router-dom";
import Game from "./components/Game";
import Home from "./components/HomeComponents/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        {/* <Route path='/rules' element={<Rules />}/> */}
      </Routes>
    </>
  );
};

export default App;
