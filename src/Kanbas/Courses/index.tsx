import CoursesNavigation from "./CoursesNavigation";
import Modules from "./Modules";
import { Navigate, Route, Routes } from "react-router";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import Quizzes from "./Quizzes";
import Piazza from "./Piazza";
import Zoom from "./Zoom";
import People from "./People";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";



export default function Courses() {
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        Course 1234{" "}
      </h2>{" "}
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="Piazza" element={<Piazza />} />
            <Route path="Zoom" element={<Zoom />} />
            <Route path="Quizzes" element={<Quizzes />} />
            <Route path="Grades" element={<Grades />} />
            <Route path="People" element={<PeopleTable />} />
            <Route path="People/:pid" element={<People />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
