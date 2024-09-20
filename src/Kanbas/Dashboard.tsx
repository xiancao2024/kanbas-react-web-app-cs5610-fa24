import { Link } from "react-router-dom";

export default function Dashboard() {
  const courses = [
    { id: 1, title: "CS5610 React JS", description: "Full Stack Software Development", imgSrc: "/images/5610.png", link: "/Kanbas/Courses/CS5610/Home" },
    { id: 2, title: "CS5001 Database Management", description: "Introduction to SQL", imgSrc: "/images/5001.png", link: "/Kanbas/Courses/CS5001/Home" },
    { id: 3, title: "CS5004 Software Engineering", description: "Agile Development", imgSrc: "/images/5004.png", link: "/Kanbas/Courses/CS5004/Home" },
    { id: 4, title: "CS5005 Artificial Intelligence", description: "AI and Machine Learning", imgSrc: "/images/5005.png", link: "/Kanbas/Courses/CS5005/Home" },
    { id: 5, title: "CS5800 Algorithms", description: "Data Structures and Algorithms", imgSrc: "/images/5800.png", link: "/Kanbas/Courses/CS5800/Home" },
    { id: 6, title: "CS5008 Operating Systems", description: "Multithreading, Memory Management", imgSrc: "/images/5008.png", link: "/Kanbas/Courses/CS5008/Home" },
    { id: 7, title: "CS5009 Distributed Systems", description: "Scalable Systems Design", imgSrc: "/images/5009.png", link: "/Kanbas/Courses/CS5009/Home" },
  ];

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
        {courses.map(course => (
          <div className="wd-dashboard-course" key={course.id}>
            <Link className="wd-dashboard-course-link" to={course.link}>
              <img src={course.imgSrc} alt={course.title} width={200} />
              <div>
                <h5>{course.title}</h5>
                <p className="wd-dashboard-course-title">{course.description}</p>
                <button>Go</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
