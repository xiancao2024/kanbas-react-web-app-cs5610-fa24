import { Navigate, Route, Routes } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./style.css";
// import * as db from "./Database";
import { useEffect, useState } from "react";
// import store from "./store";
// import { Provider } from "react-redux";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";
import { useSelector } from "react-redux";

export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course1",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
    image: "./images/test.jpg",
  });
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [enrolling, setEnrolling] = useState<boolean>(false);

  const updateEnrollment = async (courseId: string, enrolled: boolean) => {
    if (enrolled) {
      await userClient.enrollIntoCourse(currentUser._id, courseId);
    } else {
      await userClient.unenrollFromCourse(currentUser._id, courseId);
    }
    setCourses(
      courses.map((course) => {
        if (course._id === courseId) {
          return { ...course, enrolled: enrolled };
        } else {
          return course;
        }
      })
    );
  };

  const findCoursesForUser = async () => {
  try {
    console.log("Fetching courses for user:", currentUser._id);
    const courses = await userClient.findCoursesForUser(currentUser._id);
    console.log("Fetched courses:", courses);
    setCourses(courses);
  } catch (error) {
    console.error("Error finding courses for user:", error);
  }
};

const fetchCourses = async () => {
  try {
    console.log("Fetching all courses...");
    const allCourses = await courseClient.fetchAllCourses();
    console.log("All courses:", allCourses);
    const enrolledCourses = await userClient.findCoursesForUser(
      currentUser._id
    );
    console.log("Enrolled courses:", enrolledCourses);
    const courses = allCourses.map((course: any) => {
      if (enrolledCourses.find((c: any) => c._id === course._id)) {
        return { ...course, enrolled: true };
      } else {
        return course;
      }
    });
    console.log("Processed courses:", courses);
    setCourses(courses);
  } catch (error) {
    console.error("Error fetching courses:", error);
  }
};


  useEffect(() => {
    console.log("Current user:", currentUser);
    console.log("Enrolling:", enrolling);
    if (currentUser && currentUser._id) {
      if (enrolling) {
        console.log("Fetching courses...");
        fetchCourses();
      } else {
        console.log("Finding courses for user...");
        findCoursesForUser();
      }
    }
  }, [currentUser, enrolling]);
  

  const addNewCourse = async () => {
    const newCourse = await courseClient.createCourse(course);
    setCourses([...courses, newCourse]);
  };
  const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = async () => {
    await courseClient.updateCourse(course);
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
    <Session>
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
                    setCourses={setCourses}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                    enrolling={enrolling}
                    setEnrolling={setEnrolling}
                    updateEnrollment={updateEnrollment}
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
    </Session>
  );
}