import React from "react";

function PersInfo(props) {
const {name, age} = props
  return (
    <div className="pers">
      <h2>Name: {name}</h2>
      <h2>Name: {age}</h2>
    </div>
  );
}

export default PersInfo;