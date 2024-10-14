import React from "react";
import { NavLink } from "react-router-dom";

export default function AccountNavigation() {
  const links = [
    { label: "Signin", path: "/Kanbas/Account/Signin", id: "wd-account-signin-link" },
    { label: "Signup", path: "/Kanbas/Account/Signup", id: "wd-account-signup-link" },
    { label: "Profile", path: "/Kanbas/Account/Profile", id: "wd-account-profile-link" },
  ];

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <NavLink
          key={link.id}
          id={link.id}
          to={link.path}
          className={({ isActive }) =>
            `list-group-item border-0 ${isActive ? "active" : "text-danger"}`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
}

