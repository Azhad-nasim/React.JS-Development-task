import React from "react";
import "./Social.css";
import SocialData from "../SocialData/Socialdata";
import Custom from "../CustomGroup/Custom";
import "../Location/Location.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPen,
  faCircleExclamation,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import Social1 from "../../assets/social-image/first.png";
import Social2 from "../../assets/social-image/second.png";
import Social3 from "../../assets/social-image/third.png";
import Profile1 from "../../assets/Profile-Picture/p-1.png";
import Profile2 from "../../assets/Profile-Picture/p-2.png";
import Profile3 from "../../assets/Profile-Picture/p-3.png";
import Profile4 from "../../assets/Profile-Picture/p-4.png";
import Group1 from "../../assets/Group_assets/g-1.png"
import Group2 from "../../assets/Group_assets/g-2.png"
import Group3 from "../../assets/Group_assets/g-3.png"
import Group4 from "../../assets/Group_assets/g-4.png"
function Social(extraText1Info, extraText2Info) {
  return (
    <div className="container">
      <div className="d-flex flex-column align-items-end  float-end d-none d-xl-block info-location">
        <div className="d-flex align-items-center info">
          <FontAwesomeIcon icon={faLocationDot} className="me-2" />
          <input className="input" placeholder="Noida, India" />
          <FontAwesomeIcon icon={faPen} />
        </div>
        <hr style={{ width: "100%", borderTop: "2px solid #ccc" }} className="line" />
        <div className="d-flex  align-items-start info-location1">
          <FontAwesomeIcon
            icon={faCircleExclamation}
            style={{ position: "relative", top: "4px" }}
            className=" me-2"
          />
          <span>
            Your location will help us serve better <br />
            and extend a personalised experience.
          </span>
        </div>
        <div className="d-flex flex-row align-items-center mt-5 ">
          <FontAwesomeIcon icon={faThumbsUp} className="text-black me-2" />
          <span className="text-black text-uppercase fs-6 fw-normal letter-spacing-1.4px">
            REcommended Groups
          </span>
        </div>
        <div className="d-flex flex-column-reverse align-items-end custom-container mt-5">
         <Custom 
         ImageSrc={Group1} 
         SpanText ="Leisure"
         buttonText="Follow"
         />
         <Custom 
         ImageSrc={Group2} 
         SpanText ="Activism"
         buttonText="Follow"
         />
         <Custom 
         ImageSrc={Group3} 
         SpanText ="MBA"
         buttonText="Follow"
         />
         <Custom 
         ImageSrc={Group4} 
         SpanText ="Philosophy"
         buttonText="Follow"
         />
        </div>
         <span className="d-flex justify-content-end align-items-end text-primary see_text">See More...</span>
      </div>

      <div className="row">
        <div className="col-md-6 ">
          <SocialData
            imageSrc={Social1}
            headingFirst="✍️ Article"
            articleText="What if famous brands had regular fonts? Meet RegulaBrands!"
            mainText="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
            profileImageSrc={Profile1}
            profileName="Sarthak Kamra"
            viewsText="1.4k views"
          />
          <SocialData
            imageSrc={Social2}
            headingFirst="🔬️ Education"
            articleText="Tax Benefits for Investment under National Pension Scheme launched by Government"
            mainText="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
            profileImageSrc={Profile2}
            profileName="Sarah West"
            viewsText="1.4k views"
          />
          <SocialData
            imageSrc={Social3}
            headingFirst="🗓️ Meetup"
            articleText="Finance & Investment Elite Social Mixer @Lujiazui"
            extraText1={extraText1Info}
            buttonText1="Visit Website"
            profileImageSrc={Profile3}
            profileName="Ronal Jones"
            viewsText="1.4k views"
          />
          <SocialData
            headingFirst="💼️ Job"
            articleText="Software Developer"
            extraText2={extraText2Info}
            buttonText2="Apply on Timesjobs"
            profileImageSrc={Profile4}
            profileName="Joseph Gray"
            viewsText="1.4k views"
          />
        </div>
      </div>
    </div>
  );
}

export default Social;
