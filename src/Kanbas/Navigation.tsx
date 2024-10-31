import { Link, useLocation } from "react-router-dom";
import { IoSpeedometerOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaCalendar, FaInbox, FaRegCircleUser } from "react-icons/fa6";
import React from "react";


export default function KanbasNavigation() {
    const { pathname } = useLocation();

    const links = [
        { label: "Dashboard", path: "/Kanbas/Dashboard", icon: IoSpeedometerOutline },
        { label: "Courses", path: "/Kanbas/Dashboard", icon: LiaBookSolid },
        { label: "Calendar", path: "/Kanbas/Calendar", icon: FaCalendar },
        { label: "Inbox", path: "/Kanbas/Inbox", icon: FaInbox },
        { label: "Labs", path: "/Labs", icon: LiaCogSolid },
    ];

    return (
        <>
            <div
                id="wd-kanbas-navigation"
                className="border-0 list-group rounded-0 bg-black position-fixed top-0 bottom-0 z-2"
                style={{ width: 120 }}
            >
                <div className="wd-main-content-offset p-3"></div>
                <a
                    className="border-0 text-center bg-black text-white list-group-item"
                    href="https://www.northeastern.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        style={{ width: "80px", height: "85px", margin: "0 auto" }}
                        src="./images/NEU.png"
                        alt="Northeastern University Logo"
                    />
                </a>
                <Link
                    to="/Kanbas/Account"
                    className={`list-group-item text-center border-0 ${
                        pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"
                    }`}
                >
                    <FaRegCircleUser
                        className={`fs-1 ${
                            pathname.includes("Account") ? "text-danger" : "text-white"
                        }`}
                    />
                    <br />
                    Account
                </Link>
                {links.map((link) => (
                    <Link
                        key={link.label}
                        to={link.path}
                        className={`list-group-item text-center border-0 ${
                            pathname.includes(link.label)
                                ? "bg-white text-danger"
                                : "bg-black text-white"
                        }`}
                    >
                        {React.createElement(link.icon, { className: "fs-1" })}
                        <br />
                        {link.label}
                    </Link>
                ))}
            </div>

            {/* Main Content with adjusted margin */}
            <div className="main-content">
                {/* Your main content goes here */}
            </div>
        </>
    );
}
