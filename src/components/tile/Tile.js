import React from "react";

export default (props) => {
  return (
    <div className="tile-container">
      <ul>
         <ls> {props.description}</ls>
         <ls> {props.name}</ls>
      </ul>
     
    </div>
  );
};