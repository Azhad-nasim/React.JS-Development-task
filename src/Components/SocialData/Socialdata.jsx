import React from "react";
import "../SocialMedia/Social.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faEye,
  faShareNodes,
  faCalendar,
  faLocationDot,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

function SocialData({
  imageSrc,
  headingFirst,
  articleText,
  mainText,
  profileImageSrc,
  profileName,
  viewsText,
  buttonText1,
  buttonText2,
  extraText1,
  extraText2,
}) {
  const extraText1Info = {
    date: "Fri, 12 Oct, 2018",
    location: "Ahmedabad, India",
  };
  const extraText2Info = {
    Job: "Innovaccer Analytics Private Ltd.",
    location: "Noida, India",
  };
  return (
    
    <div className="card custom-card">
      <div className="card-body">
        {imageSrc && (
          <img
            src={imageSrc}
            alt="Social_Image1"
            className="img-fluid rounded-top"
          />
        )}
        <span className="article">{headingFirst}</span>
        <div className="d-flex flex-column mt-3">
          <p className="para-1">{articleText}</p>
          <FontAwesomeIcon
            icon={faEllipsis}
            className="align-self-end ellipse"
          />
        </div>
        <p className="mb-3 para-2">{mainText}</p>
        {extraText1 && (
          <div
            className="d-flex flex-row justify-content-between align-items-center label"
            style={{ position: "relative", bottom: "2rem" }}
          >
            <div className="d-flex align-items-center">
              <FontAwesomeIcon
                icon={faCalendar}
                style={{ marginRight: "1rem" }}
              />
              <span>{extraText1Info.date}</span>
            </div>
            <div
              className="d-flex align-items-center"
              style={{ position: "relative", right: "1rem" }}
            >
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ marginRight: "1rem" }}
              />
              <span>{extraText1Info.location}</span>
            </div>
          </div>
        )}
        {extraText2 && (
          <div
            className="d-flex flex-row justify-content-between align-items-center mt-3 label"
            style={{ position: "relative", bottom: "2rem" }}
          >
            <div className="d-flex align-items-center">
              <FontAwesomeIcon
                icon={faBriefcase}
                style={{ marginRight: "1rem" }}
              />
              <span>{extraText2Info.Job}</span>
            </div>
            <div
              className="d-flex align-items-center"
              style={{ position: "relative", right: "0rem" }}
            >
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ marginRight: "1rem" }}
              />
              <span>{extraText2Info.location}</span>
            </div>
          </div>
        )}
        {buttonText1 && <Button className="btn1">{buttonText1}</Button>}
        {buttonText2 && <Button className="btn2">{buttonText2}</Button>}

        <div className="d-flex flex-row justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img
              src={profileImageSrc}
              alt="Profile_Image1"
              className="profile-image"
            />
            <h6 className="m-0 profile">{profileName}</h6>
          </div>
          <div className="d-flex align-items-center">
            <FontAwesomeIcon
              icon={faEye}
              className="mr-2 views d-none d-md-flex"
            />
            <span className="font-size-small views ">{viewsText}</span>
            <FontAwesomeIcon
              icon={faShareNodes}
              className="ml-2 d-none d-md-flex"
              style={{ cursor: "pointer" }}
            />
          </div>
          <Button className="d-flex d-md-none buttonz">
            <FontAwesomeIcon
              icon={faShareNodes}
              className="mt-1"
              style={{ cursor: "pointer" }}
            />
            &nbsp; Share
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SocialData;
