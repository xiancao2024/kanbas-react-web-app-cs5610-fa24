import { NavLink } from "react-router-dom";

export default function CoursesNavigation() {
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <NavLink
        to="Home"
        id="wd-course-home-link"
        className="list-group-item border border-0"
        style={({ isActive }) => ({
          color: isActive ? "black" : "red", // Black for selected (active) item, red for others
          fontWeight: isActive ? "bold" : "normal", // Bold for active item
          borderLeft: isActive ? "4px solid black" : "none", // Left border for active item
          paddingLeft: "10px", // Left padding to align with image
          backgroundColor: "transparent" // No blue background
        })}
      >
        Home
      </NavLink>
      <NavLink
        to="Modules"
        id="wd-course-modules-link"
        className="list-group-item border border-0"
        style={({ isActive }) => ({
          color: isActive ? "black" : "red", // Black for active, red for inactive
          fontWeight: isActive ? "bold" : "normal",
          borderLeft: isActive ? "4px solid black" : "none",
          paddingLeft: "10px",
          backgroundColor: "transparent" // No blue background
        })}
      >
        Modules
      </NavLink>
      <NavLink
        to="Piazza"
        id="wd-course-piazza-link"
        className="list-group-item border border-0"
        style={({ isActive }) => ({
          color: isActive ? "black" : "red",
          fontWeight: isActive ? "bold" : "normal",
          borderLeft: isActive ? "4px solid black" : "none",
          paddingLeft: "10px",
          backgroundColor: "transparent" // No blue background
        })}
      >
        Piazza
      </NavLink>
      <NavLink
        to="Zoom"
        id="wd-course-zoom-link"
        className="list-group-item border border-0"
        style={({ isActive }) => ({
          color: isActive ? "black" : "red",
          fontWeight: isActive ? "bold" : "normal",
          borderLeft: isActive ? "4px solid black" : "none",
          paddingLeft: "10px",
          backgroundColor: "transparent" // No blue background
        })}
      >
        Zoom
      </NavLink>
      <NavLink
        to="Assignments"
        id="wd-course-assignments-link"
        className="list-group-item border border-0"
        style={({ isActive }) => ({
          color: isActive ? "black" : "red",
          fontWeight: isActive ? "bold" : "normal",
          borderLeft: isActive ? "4px solid black" : "none",
          paddingLeft: "10px",
          backgroundColor: "transparent" // No blue background
        })}
      >
        Assignments
      </NavLink>
      <NavLink
        to="Quizzes"
        id="wd-course-quizzes-link"
        className="list-group-item border border-0"
        style={({ isActive }) => ({
          color: isActive ? "black" : "red",
          fontWeight: isActive ? "bold" : "normal",
          borderLeft: isActive ? "4px solid black" : "none",
          paddingLeft: "10px",
          backgroundColor: "transparent" // No blue background
        })}
      >
        Quizzes
      </NavLink>
      <NavLink
        to="Grades"
        id="wd-course-grades-link"
        className="list-group-item border border-0"
        style={({ isActive }) => ({
          color: isActive ? "black" : "red",
          fontWeight: isActive ? "bold" : "normal",
          borderLeft: isActive ? "4px solid black" : "none",
          paddingLeft: "10px",
          backgroundColor: "transparent" // No blue background
        })}
      >
        Grades
      </NavLink>

      <NavLink
        to="People"
        id="wd-course-people-link"
        className="list-group-item border border-0"
        style={({ isActive }) => ({
          color: isActive ? "black" : "red",
          fontWeight: isActive ? "bold" : "normal",
          borderLeft: isActive ? "4px solid black" : "none",
          paddingLeft: "10px",
          backgroundColor: "transparent" // No blue background
        })}
      >
        People
        </NavLink>

      

    </div>
  );
}
