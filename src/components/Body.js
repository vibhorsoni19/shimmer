import React, { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./shimmer";

const Body = () => {
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);
  useEffect(() => {
    getMemes();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[]);

  const handleScroll = () => {
    //scroll y=  how much i have scrolled
    //innerHeight = height of the window(visible section)
    //document.body.scrollHeight =  total height of web page
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      console.log("fetch more data");
      getMemes();
    }
  };

  const getMemes = async () => {
    setShowShimmer(true);
    const getData = await fetch("https://meme-api.com/gimme/50");
    const jsonData = await getData.json();
    setShowShimmer(false);
    setMemes((memes) => [...memes, ...jsonData.memes]);
  };

  return (
    <div className="cardContainer">
      {memes.map((meme, index) => (
        <Card key={index} data={meme} />
      ))}

      {showShimmer && <Shimmer />}
    </div>
  );
};

export default Body;
