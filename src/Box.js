import React from "react";

import "./Box.css";

export default function Box(props) {
  const styles = {
    backgroundColor: props.on ? "#222222" : "transparent",
  };

  return (
    <button style={styles} className="box" onClick={props.toggle}></button>
  );
}
