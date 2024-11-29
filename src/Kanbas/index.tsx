import { Navigate, Route, Routes } from "react-router";
import Account from "./Account";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import ProtectedRoute from "./Account/ProtectedRoute";
import "./styles.css"; // Adjust the path based on where your CSS file is located
import courseData from "./Database/courses.json"; // Import courses.json correctly
import Dashboard from "./Dashboard";

export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>(courseData); // Use the correct imported courses data
  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
    image: "./images/test.jpg",
  });
  const addNewCourse = (courseID: any) => {
    setCourses([...courses, { ...course, _id: courseID }]);
  };
  const deleteCourse = (courseId: any) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
      <div id="wd-kanbas">
        <KanbasNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route
              path="/Dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                    setCourses={function (course: any): void {
                      throw new Error("Function not implemented.");
                    }}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Courses/:cid/*"
              element={
                <ProtectedRoute>
                  <Courses courses={courses} />
                </ProtectedRoute>
              }
            />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
