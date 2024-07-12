import React, { useState, useEffect, useRef } from "react";

const SearchBar = ({ setSearchTerm }) => {
  const [inputValue, setInputValue] = useState("");
  const debounceTimeoutRef = useRef(null);

  useEffect(() => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    debounceTimeoutRef.current = setTimeout(() => {
      setSearchTerm(inputValue);
    }, 500);

    return () => {
      clearTimeout(debounceTimeoutRef.current);
    };
  }, [inputValue, setSearchTerm]);

  return (
    <input
      type="text"
      placeholder="Search by mission name"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};

export default SearchBar;
