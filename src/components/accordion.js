import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

function AccordionItem({ title, content, index }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const backgroundColor = index % 2 === 0 ? "bg-[#f0f0f0]" : "bg-[#f0f0f031]";

  return (
    <div className={`${backgroundColor} px-4 py-4 rounded-md`}>
      <div className={"text-lg flex items-center"} onClick={handleToggle}>
        {title}
        {isOpen ? (
          <AiOutlineMinus className="ml-auto" />
        ) : (
          <AiOutlinePlus className="ml-auto" />
        )}
      </div>
      {isOpen && (
        <div>
          <div>
            <hr className="border-1 mt-3 border-[#1c21233d]" />
          </div>
          <div className="text-sm py-3">{content}</div>
        </div>
      )}
    </div>
  );
}

export default AccordionItem;
