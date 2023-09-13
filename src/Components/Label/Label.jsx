import React, { useState } from "react";
import "./Label.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faUsers } from "@fortawesome/free-solid-svg-icons";

function Label() {
  const [selectedTag, setSelectedTag] = useState("All Posts(32)");

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <div className="container">
      {/* Show only on larger screens */}
      <div className="d-none d-md-flex justify-content-between align-items-center ">
        <div className="d-flex flex-wrap mt-3 label">
          <h5
            className={`mr-3 ${
              selectedTag === "All Posts(32)" ? "selected" : ""
            }`}
            onClick={() => handleTagClick("All Posts(32)")}
          >
            All Posts(32)
          </h5>
          <h5
            className={`mr-3 ${selectedTag === "Article" ? "selected" : ""}`}
            onClick={() => handleTagClick("Article")}
          >
            Article
          </h5>
          <h5
            className={`mr-3 ${selectedTag === "Event" ? "selected" : ""}`}
            onClick={() => handleTagClick("Event")}
          >
            Event
          </h5>
          <h5
            className={`mr-3 ${selectedTag === "Education" ? "selected" : ""}`}
            onClick={() => handleTagClick("Education")}
          >
            Education
          </h5>
          <h5
            className={`mr-3 ${selectedTag === "Job" ? "selected" : ""}`}
            onClick={() => handleTagClick("Job")}
          >
            Job
          </h5>
        </div>
        <div className="d-flex">
          <Button>
            Write a Post &nbsp;
            <FontAwesomeIcon icon={faCaretDown} />
          </Button>
          <Button>
            <FontAwesomeIcon icon={faUsers} />
            &nbsp; Join Group
          </Button>
        </div>
      </div>

      {/* Show only on mobile devices */}
      <div className="d-flex  justify-content-between align-items-center d-md-none">
        <h5>Posts(368)</h5>
        <Button>Filter: All  &nbsp;
        <FontAwesomeIcon icon={faCaretDown} />
        </Button>
      </div>

      <hr className="mt-1" />
    </div>
  );
}

export default Label;
