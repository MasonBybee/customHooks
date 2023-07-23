import React, { useState } from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css";
import { useFlip } from "./CustomHooks";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [flipped, toggleFlipped] = useFlip();

  return (
    <img
      src={flipped ? back : front}
      alt="playing card"
      onClick={toggleFlipped}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
