import { NavLink } from "react-router-dom";

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {/* Signin Link */}
      <NavLink
        to="/Kanbas/Account/Signin"
        id="wd-account-signin-link"
        className="list-group-item border border-0"
        style={({ isActive }) => ({
          color: isActive ? "black" : "red", // Change text color based on active state
          fontWeight: isActive ? "bold" : "normal", // Bold font if active
          borderLeft: isActive ? "4px solid black" : "4px solid transparent", // Show black line on the left when active, transparent otherwise
          paddingLeft: "10px", // Padding ensures spacing with text
          backgroundColor: "transparent", // Transparent background to match the picture
        })}
      >
        Signin
      </NavLink>

      {/* Signup Link */}
      <NavLink
        to="/Kanbas/Account/Signup"
        id="wd-account-signup-link"
        className="list-group-item border border-0"
        style={({ isActive }) => ({
          color: isActive ? "black" : "red",
          fontWeight: isActive ? "bold" : "normal",
          borderLeft: isActive ? "4px solid black" : "4px solid transparent", // Same border effect as above
          paddingLeft: "10px",
          backgroundColor: "transparent",
        })}
      >
        Signup
      </NavLink>

      {/* Profile Link */}
      <NavLink
        to="/Kanbas/Account/Profile"
        id="wd-account-profile-link"
        className="list-group-item border border-0"
        style={({ isActive }) => ({
          color: isActive ? "black" : "red",
          fontWeight: isActive ? "bold" : "normal",
          borderLeft: isActive ? "4px solid black" : "4px solid transparent", // Same border effect as above
          paddingLeft: "10px",
          backgroundColor: "transparent",
        })}
      >
        Profile
      </NavLink>
    </div>
  );
}
