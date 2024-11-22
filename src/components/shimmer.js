import React from "react";

const Shimmer = () => {
  return Array(20).fill(0).map((n,i)=>(
    <div key={i} className="card">
       <p></p>
      <div className="imgStyleShimmer"></div>
    </div>))

};

export default Shimmer;
