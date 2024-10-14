import React from "react";
import { FaUserCircle } from "react-icons/fa";
import users from "../../Database/users.json"; // Import users data
import enrollments from "../../Database/enrollments.json"; // Import enrollments data
import { useParams } from "react-router-dom";

export default function PeopleTable() {
  const { cid } = useParams(); // Get the course ID from the URL

  // Filter users based on enrollments and the current course ID (cid)
  const enrolledUsers = enrollments
    .filter((enrollment) => enrollment.course === cid) // Filter enrollments by course ID
    .map((enrollment) => {
      const user = users.find((usr) => usr._id === enrollment.user); // Find the user related to the enrollment
      return { ...user, ...enrollment }; // Merge user and enrollment data
    });

  return (
    <div id="wd-people-table">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {enrolledUsers.length > 0 ? (
            enrolledUsers.map((user) => (
              <tr key={user._id}>
                <td className="wd-full-name text-nowrap">
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">{user.firstName}</span>{" "}
                  <span className="wd-last-name">{user.lastName}</span>
                </td>
                <td className="wd-login-id">{user.loginId}</td>
                <td className="wd-section">{user.section || "N/A"}</td>
                <td className="wd-role">{user.role || "Student"}</td>
                <td className="wd-last-activity">
                  {user.lastActivity || "No recent activity"}
                </td>
                <td className="wd-total-activity">
                  {user.totalActivity || "No activity data"}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td  className="text-center">
                No users enrolled in this course.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
