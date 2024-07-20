import React from "react";

export default (props) => {
  return (
    <div className="tile-container">
      <ul>
        <li>
          {props.name}
        </li>
        <ls>
          {props.description}
          </ls>
      </ul>
        <button>More</button>
    </div>
  );
};
