import React from "react";

const Card = ({ data }) => {
  const { url, author, title } = data;

  return (
    <div className="card">
        <p>{title}</p>
      <img className="imgStyle" src={url} alt={title} />
      <p>{author}</p>
    </div>
  );
};

export default Card;
