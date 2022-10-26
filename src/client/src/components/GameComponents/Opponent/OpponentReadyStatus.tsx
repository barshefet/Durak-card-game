import React from "react";

const OpponentReadyStatus = (props: any) => {
  return props.playerReady ? (
    <>
      <div className="opponent-ready-status">
        <div>
          <h2>Ready</h2>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="opponent-notready-status">
        <div>
          <h2>Not Ready</h2>
        </div>
      </div>
    </>
  );
};

export default OpponentReadyStatus;
