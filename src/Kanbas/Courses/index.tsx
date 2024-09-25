import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import { Navigate, Route, Routes } from "react-router";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import People from "./People";
import Quizzes from "./Quizzes";
import Piazza from "./Piazza";
import Zoom from "./Zoom";

export default function Courses() {
    return (
      <div id="wd-courses">
        <h2>Course 1234</h2><hr />
      <table>
        <tr>
          <td valign="top"><CoursesNavigation /></td>
          <td valign="top">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element= {<Assignments />} />
              <Route path="Assignments/:aid" element={<AssignmentEditor />} />
              <Route path="People" element={<People />} />
              <Route path="Piazza" element={<Piazza />} />
              <Route path="Zoom" element={<Zoom />} />
              <Route path="Quizzes" element={< Quizzes/>} />
              <Route path="Grades" element={<Grades />} /> 

            </Routes>
          </td>
        </tr>
      </table>

      </div>
  );}
  
  