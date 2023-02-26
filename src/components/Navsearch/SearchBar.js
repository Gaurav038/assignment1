import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function SearchBar({changeWord, showheading}) {
  const [wordEntered, setWordEntered] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
     event.preventDefault();
     showheading(event.target.value)
   }
 }

const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    changeWord(searchWord);
 }

  const clearInput = () => {
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <div className="searchIcon">
          <SearchIcon />
        </div>
        <input
          type="text"
          placeholder="Search Images here"
          value={wordEntered}
          onChange={handleFilter}
          onKeyPress={handleKeyDown}
        />
        <div className="searchIcon">
          {wordEntered.length > 0 && <CloseIcon id="clearBtn" onClick={clearInput}  />}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;