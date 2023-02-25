import React, { useState } from 'react'
import './gallery.css'
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import Model from './Model'

function Gallery({result}) {

  const [show, setShow] = useState(false)
  const [data, setData] = useState()

  const showModelData = (value) => {
      setShow(true)
      setData(value)
  }

  const hideModel = () =>{
    setShow(false)
  }

  return (
    <>
      <div className="gallery">
            {result.map((value) => {
                  return (
                      <div className='wrapper' key={value.id} onClick={()=>showModelData(value)} >
                        <img className='main-image' src={value.urls.small} alt='' />

            <div className="user">
              <div className="userDetail">
                <img
                  src={value.user.profile_image.small && value.user.profile_image.small}
                  alt="profile img"
                  className="profile"
                />
                <div className="userName">
                  <p>Jacob Jones</p>
                  <i className="userName_i">@jacobclicks</i>
                </div>
              </div>
                <div className="userLikes">
                  <span className="span-2">
                    <ThumbUpOffAltIcon /> {value.likes}
                  </span>
                </div>
              </div>
                      </div>
                      
                  )
            })}
      </div>
   
      <Model show={show} data={data} hideModel={hideModel} />
    </>
  )
}

export default Gallery