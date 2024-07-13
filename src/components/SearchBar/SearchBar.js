import React, { useState, useEffect, useRef } from "react";

const SearchBar = ({ setSearchTerm }) => {
  const [inputValue, setInputValue] = useState("");
  const debounceTimeoutRef = useRef(null);

  useEffect(() => {
    if (debounceTimeoutRef.current) {
      // Clears any existing timeout to prevent the previous debounce from firing if 'inputValue' changes before the timeout completes.
      clearTimeout(debounceTimeoutRef.current);
    }

    // Sets a new timeout to update the search term after a delay of 500 milliseconds.
    debounceTimeoutRef.current = setTimeout(() => {
      setSearchTerm(inputValue); // Updates the search term with the latest 'inputValue' after a delay, implementing a debounce effect.
    }, 500);

    // Cleanup function to clear the timeout if the component unmounts or 'inputValue' changes before the timeout completes.
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
