import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./App.css"
import MainSearch from './components/herodiv/MainSearch'
import NavBars from './components/navbar/NavBars'
import Gallery from './components/gallery/Gallery'
import Heading from './components/seachHeading/Heading'
import Loader from './components/Loader'

function App() {
    const [word, setWord] = useState("nature")
    const [result, setResult] = useState([])
    const [searchHeading, setSearchHeading] = useState()
    const [darkMode, setDarkMode] = useState(false)
    const [loading, setLoading] = useState(true);

    const toggler = () => {
        darkMode ? setDarkMode(false) : setDarkMode(true);

    }

    const changePhoto = async() => {

        try {
            setLoading(true);
            const res = await axios.get(`https://api.unsplash.com/search/photos?query=${word}&client_id=ZCKk-F23ieH8W6sl_14FRpq3OQDanu4_C8NGVf0ie7Q`)
            setResult(res.data.results);
          } catch (error) {
            console(error.message);
          }
           setLoading(false);
    }

    const changeSearchWord = (value) => {
        setWord(value)
    }

    const showheading = (value) => {
        setSearchHeading(value)
    }

    useEffect(() => {
      changePhoto()
    }, [word])

        
    return (
        <div className='app' data-theme={darkMode} >

            {/*--------------- NavBar section----------------- */}
            <NavBars changeWord={changeSearchWord} showheading={showheading} toggler={toggler} darkMode={darkMode} />

            {/*--------------- Mid section----------------- */}
             {searchHeading 
                    ? (<Heading searchHeading={searchHeading} />)
                    : (<MainSearch changeWord={changeSearchWord} showheading={showheading} />)
             }

             {/*--------------- Result section----------------- */}
             {
                loading 
                    ? <Loader />        
                    : <Gallery result={result} />
             }
            
        </div>
    )
}

export default App
