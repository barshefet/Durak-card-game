import React from "react";
import { useNavigate } from "react-router-dom";
import "./Rules.scss";

const Rules = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="rules-container">
        <div className="rules">
          <div className="rules-headline">
            <h1>Game Rules</h1>
          </div>

          <div className="single-subject">
            <h2>What is Durak?</h2>
            <p>Durak is a traditional Russian card game that is popular in many post-Soviet states. It is Russia's most popular card game, having displaced Preferans.</p><p> It has since become known in other parts of the world. </p>
          </div>

          <div className="single-subject">
            <h2>What is the goal of the game?</h2>
            <p>Don't be the fool!</p>
            <p><p>The objective of the game is to shed all one's cards when there are no more cards left in the deck. At the end of the game, the last player with cards in their hand is the durak or 'fool'.</p></p>
          </div>

          <div className="single-subject">
            <h2>game rules</h2>
            <h3>amount of players</h3>
            <p>2-4 players</p>
            <h3>Game Basics</h3>
            <p>The game is played with <a href="https://en.wikipedia.org/wiki/French-suited_playing_cards">French-suited</a> playing cards</p>
            <p>numbers </p>
          </div>
        </div>
      </div>
      <div className="rules-return-button">
        <img src="images/return.png" alt="" onClick={() => navigate("/")} />
      </div>
    </>
  );
};

export default Rules;
