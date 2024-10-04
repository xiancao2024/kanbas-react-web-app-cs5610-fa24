import { Link, NavLink } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { LiaBookSolid } from "react-icons/lia";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { MdCalendarToday } from "react-icons/md";
import { FaFlask } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";

export default function KanbasNavigation() {
  return (
    <div style={{ display: "flex" }}>
      {/* Navigation Bar */}
      <div
        id="wd-kanbas-navigation"
        style={{ width: 110, height: "100vh" }} // Ensures full height and fixed width
        className="list-group rounded-0 bottom-0 top-0 d-none d-md-block z-2 bg-black position-fixed"
      >
        <a
          id="wd-neu-link"
          target="_blank"
          href="https://www.northeastern.edu/"
          className="list-group-item bg-black border-0"
        >
          <img src="/images/NEU.png" width="75px" />
        </a>

        <NavLink
          to="/Kanbas/Account"
          id="wd-account-link"
          className={({ isActive }) =>
            `list-group-item text-center border-0 ${isActive ? 'bg-white text-danger' : 'bg-black text-white'}`
          }
        >
          <FaRegCircleUser className="fs-1" style={{ color: 'white' }} />
          <br />
          Account
        </NavLink>

        <NavLink
          to="/Kanbas/Dashboard"
          id="wd-dashboard-link"
          className={({ isActive }) =>
            `list-group-item text-center border-0 ${isActive ? 'bg-white text-danger' : 'bg-black text-white'}`
          }
        >
          <AiOutlineDashboard className="fs-1" style={{ color: 'red' }} />
          <br />
          Dashboard
        </NavLink>

        <NavLink
          to="/Kanbas/Courses/:cid/"
          id="wd-course-link"
          className={({ isActive }) =>
            `list-group-item text-center border-0 ${isActive ? 'bg-white text-danger' : 'bg-black text-white'}`
          }
        >
          <LiaBookSolid className="fs-1" style={{ color: 'red' }} />
          <br />
          Courses
        </NavLink>

        <NavLink
          to="/Kanbas/Calendar"
          id="wd-calendar-link"
          className={({ isActive }) =>
            `list-group-item text-center border-0 ${isActive ? 'bg-white text-danger' : 'bg-black text-white'}`
          }
        >
          <MdCalendarToday className="fs-1" style={{ color: 'red' }} />
          <br />
          Calendar
        </NavLink>

        <NavLink
          to="/Kanbas/Inbox"
          id="wd-inbox-link"
          className={({ isActive }) =>
            `list-group-item text-center border-0 ${isActive ? 'bg-white text-danger' : 'bg-black text-white'}`
          }
        >
          <FaEnvelope className="fs-1" style={{ color: 'red' }} />
          <br />
          Inbox
        </NavLink>

        <NavLink
          to="/Labs"
          id="wd-labs-link"
          className={({ isActive }) =>
            `list-group-item text-center border-0 ${isActive ? 'bg-white text-danger' : 'bg-black text-white'}`
          }
        >
          <FaFlask className="fs-1" style={{ color: 'red' }} />
          <br />
          Labs
        </NavLink>

        <NavLink
          to="/LandingPage"
          id="landing-page"
          className={({ isActive }) =>
            `list-group-item text-center border-0 ${isActive ? 'bg-white text-danger' : 'bg-black text-white'}`
          }
        >
          <IoArrowBack className="fs-1" style={{ color: 'red' }} />
          <br />
          Landing Page
        </NavLink>
      </div>

      {/* Main Content */}
      <div style={{ marginLeft: "110px", padding: "20px", flexGrow: 1 }}>
        
      </div>
    </div>
  );
}
