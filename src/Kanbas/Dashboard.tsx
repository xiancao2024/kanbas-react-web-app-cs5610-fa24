import { Link } from "react-router-dom";

export default function Dashboard() {
  const courses = [
    { id: 1, title: "CS5610 Web Development", term: "Fall", year: "2024", section: "001", imgSrc: "/images/CS5610 20595 Web Development.png", link: "/Kanbas/Courses/CS5610/Home" },
    { id: 2, title: "CS5001 Intensive Foundations of CS", term: "Spring", year: "2024", section: "002", imgSrc: "/images/CS5001 20655 Intensive Foundations of CS.png", link: "/Kanbas/Courses/CS5001/Home" },
    { id: 3, title: "CS5002 Discrete Structures", term: "Fall", year: "2024", section: "003", imgSrc: "/images/CS5002 20266 Discrete Structures.png", link: "/Kanbas/Courses/CS5002/Home" },
    { id: 4, title: "CS5004 Object-Oriented Design", term: "Spring", year: "2024", section: "004", imgSrc: "/images/CS5004 39685 Object-Oriented Design.png", link: "/Kanbas/Courses/CS5004/Home" },
    { id: 5, title: "CS5005 Recitation for CS5004", term: "Fall", year: "2024", section: "005", imgSrc: "/images/CS5005 39693 Recitation for CS 5004.png", link: "/Kanbas/Courses/CS5005/Home" },
    { id: 6, title: "CS5009 Recitation for CS5008", term: "Spring", year: "2024", section: "006", imgSrc: "/images/CS5009 39702 Recitation for CS 5008.png", link: "/Kanbas/Courses/CS5009/Home" },
    { id: 7, title: "Align Math Foundations", term: "Summer", year: "2024", section: "007", imgSrc: "/images/Align Math Foundations.png", link: "/Kanbas/Courses/AlignMath/Home" }
  ];

  return (
    <div id="wd-dashboard" style={{ padding: '0 20px' }}>
      {/* Dashboard Title */}
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      
      {/* Published Courses Subtitle */}
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      
      {/* Courses Grid */}
      <div id="wd-dashboard-courses" className="row g-4" style={{ margin: '30px 0' }}>
        {courses.map(course => (
          <div key={course.id} className="col-md-3" style={{ width: "260px" }}>
            <div className="card" style={{ height: "100%" }}>
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to={course.link}>
                <img src={course.imgSrc} className="card-img-top" alt={course.title} style={{ height: '150px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">{course.title}</h5>
                  <p className="card-text">{course.term} {course.year} Section {course.section}</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
