
import React from "react";
import logo from "./logo.svg";
// import './App.css';
import Kanbas from "./Kanbas";
import Labs from "./Labs";
import { HashRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import store from "./Kanbas/store";
import { Provider } from "react-redux";
import LandingPage from "./Kanbas/LandingPage/LandingPage";

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div>
          <Routes>
             {/* Redirect "/" to "/LandingPage" */}
          <Route path="/" element={<Navigate to="/LandingPage" />} />
          <Route
            path="/Kanbas"
            element={<Navigate to="/Kanbas/Dashboard" replace />}
          />
          {/* LandingPage Route */}
          <Route path="/LandingPage" element={<LandingPage />} />

          {/* Labs and Kanbas components */}
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          </Routes>
        </div>
      </Provider>
    </HashRouter>
  );
}

export default App;