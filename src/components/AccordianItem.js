import React from "react";

const AccordianItem = ({ title, body ,isOpen,setIsOpen }) => {
    // const [isOpen,setIsOpen] = useState(false)
  return (
    <div className="accordian_container">
      <div className="accordian_title" onClick={()=>{
        setIsOpen((isOpen)=> !isOpen)
      }}>
        <span>{title}</span>
        <span>⬇️</span>
      </div>
      {isOpen && <div className="accordian_body ">{body}</div>}
    </div>
  );
};

export default AccordianItem;
