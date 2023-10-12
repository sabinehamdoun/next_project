import React, { useState } from "react";

function Dropdown({ options, selectedOption, onSelect }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleOptionClick = (option) => {
    onSelect(option);
    setShowDropdown(false);
  };

  return (
    <div className="">
      <div className="relative">
        <div
          className="w-64 p-2.5 text-[#1c212399] bg-white border border-[#c8cdcf99] rounded-md shadow-sm outline-none focus:border-[#1c2123]"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          {selectedOption}
        </div>
        {showDropdown && (
          <div className="absolute top-full left-0 w-64 bg-white border border-[#c8cdcf99] border-t-0 rounded-b-md shadow-sm">
            {options.map((option, index) => (
              <div
                key={index}
                className={`p-2 cursor-pointer hover:bg-gray-200 text-[#1c2123c1] ${
                  option === selectedOption ? "font-semibold" : ""
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
