import React, { useState } from "react";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle, FaBullhorn, FaChartBar, FaBell } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { AiFillHome, AiOutlineEye } from "react-icons/ai";
import './CourseStatus.css'; // Import the external CSS file

export default function CourseStatus() {
  // State to manage course status (published/unpublished)
  const [isPublished, setIsPublished] = useState(false);

  // Toggle the publish state
  const togglePublish = () => {
    setIsPublished(true);  // Set the course to "Published"
  };

  const toggleUnpublish = () => {
    setIsPublished(false); // Set the course to "Unpublished"
  };

  return (
    <div id="wd-course-status" style={{ width: "300px" }}>
      <h2>Course Status</h2>
      
      {/* Publish and Unpublish Buttons */}
      <div className="d-flex">
        <div className="w-50 pe-1">
          <button
            className={`btn btn-lg ${isPublished ? 'btn-secondary' : 'btn-danger'} w-100 text-nowrap`}
            onClick={toggleUnpublish}
            disabled={!isPublished} // Disable if already unpublished
          >
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish
          </button>
        </div>
        <div className="w-50">
          <button
            className={`btn btn-lg ${isPublished ? 'btn-success' : 'btn-secondary'} w-100`}
            onClick={togglePublish}
            disabled={isPublished} // Disable if already published
          >
            <FaCheckCircle className="me-2 fs-5" /> Publish
          </button>
        </div>
      </div>
      <br />
      
      {/* Import Existing Content Button */}
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" /> Import Existing Content
      </button>

      {/* Import from Commons Button */}
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons
      </button>
      <br />
      
      {/* Choose Home Page Button */}
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <AiFillHome className="me-2 fs-5" /> Choose Home Page
      </button>

      {/* View Course Stream Button */}
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <AiOutlineEye className="me-2 fs-5" /> View Course Stream
      </button>

      {/* New Announcement Button */}
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaBullhorn className="me-2 fs-5" /> New Announcement
      </button>

      {/* New Analytics Button */}
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaChartBar className="me-2 fs-5" /> New Analytics
      </button>

      {/* View Course Notifications Button */}
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaBell className="me-2 fs-5" /> View Course Notifications
      </button>

    </div>
  );
}
