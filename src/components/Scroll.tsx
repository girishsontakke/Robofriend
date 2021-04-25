import React from "react";
import "./Scroll.css";

const Scroll: React.FC<React.PropsWithChildren<{}>> = (props) => {
  return (
    <div
      className="scroll"
      style={{
        overflowY: "scroll",
        border: "1px solid black",
        height: "800px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
