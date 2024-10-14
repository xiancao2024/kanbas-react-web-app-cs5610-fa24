import React from "react";
import { useParams, Link } from "react-router-dom";
import ModulesControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./AssignmentControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { FaRegFileLines } from "react-icons/fa6";
import assignments from "../../Database/assignments.json"; // Import assignments from the Database
//import * as db from "../../Database"; // Importing everything from the Database
function Assignments() {
  const { cid } = useParams(); // Retrieve course ID from URL params

  // Filter assignments for the current course
//const assignments=db.assignments
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === cid
  );

  return (
    <div id="wd-assignments">
      <ModulesControls />
      <br />
      <br />
      <br />
      <br />
      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            {courseAssignments.map((assignment) => (
              <li
                key={assignment._id}
                className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <FaRegFileLines className="me-3 text-success" />
                  <div>
                    <div>
                      {/* Render assignment link */}
                      <Link
                        to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                        className="text-decoration-none text-dark">
                        <strong>{assignment.title}</strong>
                      </Link>
                    </div>
                    <div>
                      <span className="text-danger">Multiple Modules</span> |
                      <strong> Not available until</strong> May 6 at 12:00am |
                      <strong> Due</strong> May 13 at 11:59pm | 100 pts
                    </div>
                  </div>
                </div>
                <LessonControlButtons />
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
export default Assignments;
