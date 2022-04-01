import React, { useState } from "react";
import "./style.css";

export default function App() {
  let [backgroundColor, setBackgroundColor] = useState("lightblue");
  const changeBackgroundColor = () => {
    setBackgroundColor("red");
  };
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        width: "1000px",
        height: "1000px"
      }}
    >
      <button onClick={changeBackgroundColor}>Change Color</button>
    </div>
  );
}
