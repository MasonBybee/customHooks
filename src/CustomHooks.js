import axios from "axios";
import React, { useState } from "react";

const useFlip = () => {
  const [flipped, setFlipped] = useState(false);

  const toggleFlipped = () => {
    setFlipped((flipped) => !flipped);
  };
  return [flipped, toggleFlipped];
};

const useAxios = () => {
  const [responses, setResponses] = useState([]);

  const axiosCall = async (url) => {
    const res = await axios.get(url);
    setResponses((prev) => {
      return [prev, res.data];
    });
    return res.data;
  };

  return [responses, axiosCall];
};

export { useFlip, useAxios };
