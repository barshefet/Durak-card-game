import React, { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Game from "./components/Game";
import Home from "./components/HomeComponents/Home";
import * as io from "socket.io-client";

const App = () => {
 useEffect(() => {
  const socket = io.connect('http://localhost:4000')  

    if(socket){

    }
  }, []);
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
