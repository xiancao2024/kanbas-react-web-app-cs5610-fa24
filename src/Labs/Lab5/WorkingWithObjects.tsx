import React, { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;

  return (
    <div id="wd-working-with-objects" className="container mt-4">
      {/* Existing Code */}
      <h3>Working With Objects</h3>

      <h4>Retrieving Objects</h4>
      <a
        id="wd-retrieve-assignments"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment`}>
        Get Assignment
      </a>
      <hr />
      <h4>Retrieving Properties</h4>
      <a
        id="wd-retrieve-assignment-title"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment/title`}>
        Get Title
      </a>
      <hr />

      <h4>Modifying Properties</h4>
      <a
        id="wd-update-assignment-title"
        className="btn btn-primary float-end ms-auto"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <input
        className="form-control w-50"
        id="wd-assignment-title"
        defaultValue={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <hr />

      {/* Update Assignment Score */}
      <div className="form-group mb-3 d-flex align-items-center">
        <label htmlFor="wd-assignment-score" className="form-label me-3">
          Assignment Score:
        </label>
        <input
          type="number"
          className="form-control w-50"
          id="wd-assignment-score"
          defaultValue={assignment.score}
          onChange={(e) =>
            setAssignment({ ...assignment, score: parseInt(e.target.value) })
          }
          placeholder="Enter Assignment Score"
        />
        <a
          id="wd-update-assignment-score"
          className="btn btn-primary float-end ms-auto "
          href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
          Update Score
        </a>
      </div>

      {/* Update Assignment Completed Status */}
      <div className="form-group mb-3">
        <label htmlFor="wd-assignment-completed" className="form-label d-block">
          Assignment Completed
        </label>
        <div className="form-check form-switch">
          <input
            type="checkbox"
            className="form-check-input"
            id="wd-assignment-completed"
            checked={assignment.completed}
            onChange={(e) =>
              setAssignment({ ...assignment, completed: e.target.checked })
            }
          />
          <label htmlFor="wd-assignment-completed" className="form-check-label">
            {assignment.completed ? "Completed" : "Not Completed"}
          </label>
          <a
            id="wd-update-assignment-completed"
            className="btn btn-primary float-end"
            href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
            Update Completed Status
          </a>

          
        </div>
      </div>

      <hr />
    </div>
  );
}
