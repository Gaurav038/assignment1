import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./App.css"
import MainSearch from './components/herodiv/MainSearch'
import NavBars from './components/navbar/NavBars'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from './components/gallery/Gallery'
import Heading from './components/seachHeading/Heading'


function App() {
    const [word, setWord] = useState("c")
    const [result, setResult] = useState([])
    const [searchHeading, setSearchHeading] = useState()

    const changePhoto = () => {
        axios.get(`https://api.unsplash.com/search/photos?page=1&query=${word}&client_id=4UhQL7IdZ55_AGB-WhQQNVlxTwun4XNQI0lXn6L-gqM`)
            .then((response) => {
                setResult(response.data.results);
            })
    }
//  console.log(result)
    const changeSearchWord = (value) => {
        setWord(value)
    }

    const showheading = (value) => {
        setSearchHeading(value)
    }

    useEffect(() => {
      changePhoto()
    }, [word])

    
    console.log(searchHeading, "--------")
    
    return (
        <>
            <NavBars changeWord={changeSearchWord} showheading={showheading} />
            {!searchHeading && <MainSearch changeWord={changeSearchWord} showheading={showheading} />}
            {searchHeading && <Heading searchHeading={searchHeading} />}
            <Gallery result={result} />
        </>
    )
}

export default App
