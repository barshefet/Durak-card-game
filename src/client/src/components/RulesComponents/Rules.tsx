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
            <p>
              Durak is a traditional Russian card game that is popular in many
              post-Soviet states. It is Russia's most popular card game, having
              displaced Preferans.
            </p>
            <p> It has since become known in other parts of the world. </p>
          </div>

          <div className="single-subject">
            <h2>Amount of players</h2>
            <p>2-4 players</p>
          </div>
          <div className="single-subject">
            <h2>How to play on 1 PC</h2>
            <p>
              Note: to play on 2-4 different computers, skip the first step.
            </p>
            <p>Open the game in 2 tabs as shown below.</p>
            <img src="images/instructions/1.png" alt="" />
            <p>Press play on all tabs.</p>
            <img src="images/instructions/2.png" alt="" />
            <p>
              Choose which tab will create the game lobby and will be the host.
              fill in “RoomID” a text of your choosing as shown below.
            </p>
            <img src="images/instructions/3.png" alt="" />

            <p>Do the same for the other tab/s.</p>
            <img src="images/instructions/4.png" alt="" />

            <p>Fill in “Player Name” a name for your host as shown below.</p>
            <img src="images/instructions/5.png" alt="" />

            <p>Press “Create”.</p>
            <img src="images/instructions/6.png" alt="" />
            <img src="images/instructions/7.png" alt="" />


            <p>
              The Game Lobby has been created and the host has been transferred
              to it. Now, repeat the same steps as the host but at the end press
              “Join” instead.
            </p>
            <img src="images/instructions/8.png" alt="" />
            <img src="images/instructions/9.png" alt="" />
            <img src="images/instructions/10.png" alt="" />



            <p>
              When all players have joined the Lobby you may press “Ready”. Once
              everybody is ready the game will begin!
            </p>
            <img src="images/instructions/11.png" alt="" />
            <img src="images/instructions/12.png" alt="" />


            <p>Good luck, don't be the Durak!!!!!!!</p>
            <p>Game rules are as shown in this YouTube Tutorial:</p>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/3JagmUmUJOc?si=8ZWmOVRoOubcPtaJ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
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
