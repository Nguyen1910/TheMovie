import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./input.css";

function Input({ props }) {
  const [isSearch, setIsSearch] = useState(false);
  const handleClick = () => {
    setIsSearch(!isSearch);
  };
  return (
    <>
      <div className={isSearch ? "search__input active" : "search__input"}>
        <i className="icon-search" onClick={handleClick}>
          <FiSearch />
        </i>
        <input type="text" placeholder="Enter name" />
      </div>
    </>
  );
}

export default Input;
