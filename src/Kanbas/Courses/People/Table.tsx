import React from "react";
import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
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
          {/* Tony Stark */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Tony</span>{" "}
              <span className="wd-last-name">Stark</span>
            </td>
            <td className="wd-login-id">001234561S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-01</td>
            <td className="wd-total-activity">10:21:32</td>
          </tr>

          {/* Bruce Wayne */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Bruce</span>{" "}
              <span className="wd-last-name">Wayne</span>
            </td>
            <td className="wd-login-id">001234562B</td>
            <td className="wd-section">S102</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-02</td>
            <td className="wd-total-activity">12:15:47</td>
          </tr>

          {/* Steve Rogers */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Steve</span>{" "}
              <span className="wd-last-name">Rogers</span>
            </td>
            <td className="wd-login-id">001234563S</td>
            <td className="wd-section">S103</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-03</td>
            <td className="wd-total-activity">08:33:21</td>
          </tr>

          {/* Natasha Romanoff */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Natasha</span>{" "}
              <span className="wd-last-name">Romanoff</span>
            </td>
            <td className="wd-login-id">001234564N</td>
            <td className="wd-section">S104</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-04</td>
            <td className="wd-total-activity">09:45:18</td>
          </tr>

          {/* Xian Cao */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Xian</span>{" "}
              <span className="wd-last-name">Cao</span>
            </td>
            <td className="wd-login-id">001256564N</td>
            <td className="wd-section">S105</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-04</td>
            <td className="wd-total-activity">09:45:18</td>
          </tr>

          {/* Qingyun Zhang */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Qingyun</span>{" "}
              <span className="wd-last-name">Zhang</span>
            </td>
            <td className="wd-login-id">001256565Q</td>
            <td className="wd-section">S106</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-05</td>
            <td className="wd-total-activity">08:30:12</td>
          </tr>

          {/* Shuru Li */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Shurui</span>{" "}
              <span className="wd-last-name">Li</span>
            </td>
            <td className="wd-login-id">001256566S</td>
            <td className="wd-section">S107</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-06</td>
            <td className="wd-total-activity">07:15:10</td>
          </tr>

          {/* Dinkang Zhao */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Dingkang</span>{" "}
              <span className="wd-last-name">Zhao</span>
            </td>
            <td className="wd-login-id">001256567D</td>
            <td className="wd-section">S108</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-07</td>
            <td className="wd-total-activity">06:45:25</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
