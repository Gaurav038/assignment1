import React from 'react'
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import ShareIcon from "@mui/icons-material/Share";
import InfoIcon from "@mui/icons-material/Info";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import "./model.css"

function Model({show, data, hideModel}) {

    if(!show){
        return null
    }
    console.log(data)

  return (
    <div className={`popUp-img ${show ? 'show-model' : ""} `} >
        <div className="Task-Conatiner">
        <div className="Task-Container__img">
          <span onClick={hideModel}>
            <CloseIcon className="popup__close" />
          </span>
          <img
            src={data.urls.small && data.urls.small}
            alt="Popup image"
            className="popup__img"
          />

          <div className="icon">
            <span className="share" style={{ color: "white" }}>
              <Button
                variant="outlined"
                startIcon={<ShareIcon />}
                className="icon-btn"
              >
                Share
              </Button>
            </span>
            <span className="info">
              <Button
                variant="outlined"
                startIcon={<InfoIcon />}
                className="icon-btn"
              >
                Info
              </Button>
            </span>
          </div>
          <button className="popup__download">Download image</button>
        </div>

        <div class="Task-Container__content">
          <div className="userDetails">
            <div className="user">
              <img
                src={data.user.profile_image.small}
                alt="profile img"
                className="profile"
              />
              <div className="userName">
                <p>{data.user.first_name}</p>
                <i className="userName_i">@jacobclicks</i>
              </div>

              <div className="userLinks">
                <i className="userLink__i">
                  <InstagramIcon />
                  {data.user.instagram_username}
                </i>
                <i className="userLink__i">
                  <TwitterIcon />
                  <span> /jacobclicks</span>
                </i>
              </div>
            </div>

            <div className="userLikes">
              <span className="span-1">1.2K downloads</span>
              <span className="span-2">
                <ThumbUpOffAltIcon /> {data.likes}
              </span>
            </div>
          </div>

          <div className="tags">
            <span>Related Tags</span>
            <div className="title-div">
                <p className="tags-title">Animals in the wild</p>
                <p className="tags-title">Animals in the wild</p>
                <p className="tags-title">wild</p>
                <p className="tags-title">Animals in the wild</p>
                <p className="tags-title">Animals</p>
                <p className="tags-title">Animals</p>
                <p className="tags-title">Animals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Model