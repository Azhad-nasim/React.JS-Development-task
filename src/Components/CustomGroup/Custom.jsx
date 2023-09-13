import React from 'react';
import "../Location/Location.css";
import { Button } from "react-bootstrap";

function Custom({ ImageSrc, SpanText, buttonText }) {
  return (
    <div className="custom-group mb-4">
      <div className="d-flex flex-row align-items-center gap-5">
        <img src={ImageSrc} className="group_image" alt='Group_Image'/>
        <span className="text-black fs-5 fw-normal letter-spacing-1.4px">{SpanText}</span>
      </div>
      <div className="d-flex justify-content-start">
        <Button className="group_button">{buttonText}</Button>
      </div>
    </div>
  );
}

export default Custom;
