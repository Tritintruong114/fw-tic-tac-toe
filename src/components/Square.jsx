import React from "react";

function Square({ title, handleClick }) {
  return (
    <button className={"square"} onClick={handleClick}>
      {title}
    </button>
  );
}

export default Square;
