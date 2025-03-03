import "./App.css";

import React from "react";
import boxes from "./boxes";
import Box from "./Box";

export default function App() {
  const [squares, setSquares] = React.useState(boxes);

  function toggle(id) {
    setSquares((prevSquares) => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }

  const squareElements = squares.map((square) => (
    <Box key={square.id} on={square.on} toggle={() => toggle(square.id)} />
  ));

  return (
    <main>
      <h2>Boxes Challenge</h2>
      {squareElements}
      <p>
        The challenge is to create a toggle function that switches the color of
        the boxes between black and white.
      </p>
    </main>
  );
}
