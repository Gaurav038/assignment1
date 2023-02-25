import React from 'react'
import './Heading.css'

function Heading({searchHeading}) {
  return (
    <div className='search_heading' >
        <h1 className='head'>{searchHeading}</h1>
        <div className='cat-container' >
            <div>Elephants</div>
            <div>Background</div>
            <div>Wallpaper</div>
            <div>Mammals</div>
   
        </div>
    </div>
  )
}

export default Heading