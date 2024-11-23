import React, { useState } from "react";
import "./accordian.css";
import AccordianItem from "./AccordianItem";

const data = [
  {
    title: "item1",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
  },
  {
    title: "item1",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
  },
  {
    title: "item1",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
  },
];

const Accordian = () => {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="accordian ">
      {data.map((item, index) => (
        <AccordianItem
          key={index}
          title={item.title}
          body={item.body}
          isOpen={index === openIndex ? true : false} //first accordion- true , rest are false
          setIsOpen={() => {
            index === openIndex ?setOpenIndex(null):setOpenIndex(index)
            
          }}
        />
      ))}
    </div>
  );
};

export default Accordian;
