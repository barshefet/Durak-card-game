// TODO: finish game rules

import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Game from "./components/Game";
import Home from "./components/HomeComponents/Home";

const App = () => {

  const [roomID, setRoomID] = useState("");
  const [playerName, setName] = useState("");
  
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              roomID={roomID}
              setRoomID={setRoomID}
              playerName={playerName}
              setName={setName}
            />
          }
        />
        <Route
          path="/game"
          element={<Game roomID={roomID} playerName={playerName} />}
        />
        {/* <Route path='/rules' element={<Rules />}/> */}
      </Routes>
    </>
  );
};

export default App;
