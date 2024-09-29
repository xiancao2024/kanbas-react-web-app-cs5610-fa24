import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaSearch, FaPlus } from 'react-icons/fa';


export default function Assignments() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [assignments, setAssignments] = useState([
    {
      title: "A1 - ENV + HTML",
      available: "Not available until May 6 at 12:00am",
      due: "Due May 13 at 11:59pm",
      points: "100 pts"
    },
    {
      title: "A2 - CSS + BOOTSTRAP",
      available: "Not available until May 13 at 12:00am",
      due: "Due May 20 at 11:59pm",
      points: "100 pts"
    },
    {
      title: "A3 - JAVASCRIPT + REACT",
      available: "Not available until May 20 at 12:00am",
      due: "Due May 27 at 11:59pm",
      points: "100 pts"
    }
  ]);

  const [isAddAssignmentActive, setIsAddAssignmentActive] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  const toggleAddAssignment = () => {
    setIsAddAssignmentActive((prevState) => !prevState);
    if (!isAddAssignmentActive) {
      const newAssignment = {
        title: `New Assignment ${assignments.length + 1}`,
        available: "Not available yet",
        due: "Due date not set",
        points: "TBD"
      };
      setAssignments((prevAssignments) => [...prevAssignments, newAssignment]);
    }
  };

  return (
    <div id="wd-assignments">
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total
        <button onClick={toggleAddAssignment}>
          <FaPlus />
        </button>
      </h3>

      {/* Search Bar */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <FaSearch style={{ marginRight: '10px', color: '#ccc' }} />
        <input id="wd-search-assignment" placeholder="Search for Assignments" />
      </div>

      <button
        id="wd-collapse-all"
        className={`btn ${isCollapsed ? "btn-danger" : "btn-secondary"} me-2`}
        onClick={toggleCollapse}
      >
        {isCollapsed ? "Expand All" : "Collapse All"}
      </button>

      <button
        id="wd-add-assignment"
        className={`btn ${isAddAssignmentActive ? "btn-danger" : "btn-secondary"}`}
        onClick={toggleAddAssignment}
      >
        + Assignment
      </button>

      {/* Assignments List */}
      <ul id="wd-assignment-list" className="list-group mt-4">
        {assignments.map((assignment, index) => (
          <li
            key={index}
            className="wd-assignment-list-item list-group-item p-0 mb-4 fs-5 border-gray"
          >
            <div className="wd-title p-3 ps-2 bg-secondary text-white">
              {assignment.title}
            </div>
            <ul className={`wd-assignment-details list-group rounded-0 ${isCollapsed ? 'collapse' : ''}`}>
              <li className="list-group-item">
                <strong>{assignment.available}</strong>
              </li>
              <li className="list-group-item">
                <strong>{assignment.due}</strong>
              </li>
              <li className="list-group-item">
                <strong>{assignment.points}</strong>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
