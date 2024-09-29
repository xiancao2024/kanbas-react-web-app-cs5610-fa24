import React, { useState } from "react";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";

export default function Modules() {
  // State to manage the collapse of lessons
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [modules, setModules] = useState([
    {
      title: "Week 1",
      lessons: [
        {
          title: "LEARNING OBJECTIVES",
          content: [
            "Introduction to the course",
            "Learn what is Web Development",
            "Understand the basic web technologies",
          ],
        },
        {
          title: "READING",
          content: [
            "Full Stack Developer - Chapter 1: Introduction",
            "Full Stack Developer - Chapter 2: Setting Up Development Environment",
          ],
        },
        {
          title: "SLIDES",
          content: [
            "Introduction to Web Development",
            "Creating an HTTP server with Node.js",
            "Getting started with React.js",
          ],
        },
      ],
    },
    {
      title: "Week 2 - Lecture: Formatting User Interfaces with HTML",
      lessons: [
        {
          title: "LEARNING OBJECTIVES",
          content: [
            "Understand the structure of HTML",
            "Learn to create user interfaces using HTML",
            "Deploy HTML-based assignments on Netlify",
          ],
        },
        {
          title: "READING",
          content: [
            "HTML & CSS: Design and Build Websites - Chapter 1: HTML Basics",
            "HTML & CSS: Design and Build Websites - Chapter 2: Structure and Layout",
          ],
        },
        {
          title: "SLIDES",
          content: [
            "Introduction to HTML and the DOM",
            "HTML Elements and Attributes",
            "Using HTML to Structure Web Pages",
          ],
        },
      ],
    },
  ]);

  const [isAddModuleActive, setIsAddModuleActive] = useState(false);

  // Function to toggle collapse state
  const toggleCollapse = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  // Function to handle View Progress (Placeholder functionality)
  const handleViewProgress = () => {
    alert("View Progress functionality can be implemented here.");
  };

  // Function to toggle module addition state
  const toggleAddModule = () => {
    setIsAddModuleActive((prevState) => !prevState);
    // Add a new module when the button is clicked
    if (!isAddModuleActive) {
      const newModule = {
        title: `New Module ${modules.length + 1}`,
        lessons: [],
      };
      setModules((prevModules) => [...prevModules, newModule]);
    }
  };

  return (
    <div>
      <div>
        <button
          id="wd-collapse-all"
          className={`btn ${isCollapsed ? "btn-danger" : "btn-secondary"} me-2`}
          onClick={toggleCollapse}
        >
          {isCollapsed ? "Expand All" : "Collapse All"}
        </button>
        <button
          id="wd-view-progress"
          className={`btn ${false ? "btn-danger" : "btn-secondary"} me-2`} // Change condition as needed
          onClick={handleViewProgress}
        >
          View Progress
        </button>
        <select
          id="wd-select-one-publish"
          className="form-select d-inline-block w-auto me-2"
        >
          <option selected value="PUBLISHALL">
            Publish All
          </option>
          <option value="PUBLISH1">Publish selected</option>
        </select>
        <button
          id="wd-add-assignment"
          className={`btn ${
            isAddModuleActive ? "btn-danger" : "btn-secondary"
          }`}
          onClick={toggleAddModule}
        >
          + Module
        </button>
      </div>

      {/* Implement Collapse All button, View Progress button, etc. */}
      <ul id="wd-modules" className="list-group mt-4">
        {modules.map((module, index) => (
          <li
            key={index}
            className="wd-module list-group-item p-0 mb-4 fs-5 border-gray"
          >
            <div className="wd-title p-3 ps-2 bg-secondary text-white">
              <BsGripVertical className="me-2 fs-3" />
              {module.title}
              <ModuleControlButtons /> {/* Add Module Control Buttons */}
            </div>
            <ul
              className={`wd-lessons list-group rounded-0 ${
                isCollapsed ? "collapse" : ""
              }`}
            >
              {module.lessons.map((lesson, lessonIndex) => (
                <li
                  key={lessonIndex}
                  className="wd-lesson list-group-item p-3 ps-1"
                >
                  <BsGripVertical className="me-2 fs-3" />
                  {lesson.title}
                  <LessonControlButtons /> {/* Add Lesson Control Buttons */}
                  {/* Lesson content items */}
                  <ul className="list-group mt-2">
                    {lesson.content.map((contentItem, contentIndex) => (
                      <li key={contentIndex} className="list-group-item ps-4">
                        {contentItem}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
