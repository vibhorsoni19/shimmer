import React, { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./shimmer";

const Body = () => {
  const [memes, setMemes] = useState(null);

  useEffect(() => {
    getMemes();
  }, []);

  const getMemes = async () => {
    const getData = await fetch("https://meme-api.com/gimme/50");
    const jsonData = await getData.json();
    setMemes(jsonData.memes);
  };

  return (
    <div className="cardContainer">
      {memes ? memes.map((meme, index) => <Card key={index} data={meme} />): <Shimmer />}
     
    </div>
  );
};

export default Body;
