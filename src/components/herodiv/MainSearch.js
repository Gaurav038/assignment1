import React, { useState } from 'react'
import "./MainSearch.css"


function MainSearch({changeWord, showheading}) {

  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    changeWord(searchWord);
 }

 const handleKeyDown = (event) => {
   if (event.key === 'Enter') {
    event.preventDefault();
    showheading(event.target.value)
  }
}

  return (
    <section className="hero">
    <div className="hero-container">
      <div className="hero-content">
        <h1>Download High Quality Images by creators</h1>
        <p>
            Over 2.4 million+ stock Images by our talented community
        </p>
        <div className="hero-search-form">
          <form>
            <input type="text" placeholder="Search high resolution Images, categories, wallpapers" value={wordEntered} onChange={handleFilter} onKeyPress={handleKeyDown} />
          </form>
        </div>
      </div>
    </div>
    <div className="hero-overlay"></div>
  </section>
  )
}

export default MainSearch