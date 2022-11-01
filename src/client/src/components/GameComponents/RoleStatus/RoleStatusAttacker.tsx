import React from "react";
import './RoleStatus.scss'

const RoleStatusAttacker = (props: any) => {
  return props.attacker ? (
    <>
      <div className="role-status-container">
        <div className="role-status">
          <h2 className="role-announce">You are the : </h2>
          <h2 className="attacker-role"> Attacker</h2>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default RoleStatusAttacker;
