import React from "react";

const RoleStatusDefender = (props: any) => {
  return props.defender ? (
    <>
      <div className="role-status-container">
        <div className="role-status">
          <h2 className="role-announce">You are the : </h2>
          <h2 className="defender-role">Defender</h2>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default RoleStatusDefender;
