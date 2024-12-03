import { Navigate, Route, Routes } from "react-router";
import Signin from "./Signin";
import Profile from "./Profile";
import Signup from "./Signup";
import AccountNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa6";
import { useSelector } from "react-redux";
import Users from "./Users";

export default function Account() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);


  
  return (
    <div id="wd-account-screen">
      <div className="d-flex">
        <div className="d-none d-md-block">
          <AccountNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route
              path="/"
              element={
                <Navigate
                  to={
                    currentUser
                      ? "/Kanbas/Account/Profile"
                      : "/Kanbas/Account/Signin"
                  }
                />
              }
            />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/Users/:uid" element={<Users />} />
            
          </Routes>
        </div>
      </div>
    </div>
  );
}
