import React from "react";
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import LandingPage from "./Kanbas/LandingPage/LandingPage";
import './App.css';

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          {/* Redirect "/" to "/LandingPage" */}
          <Route path="/" element={<Navigate to="/LandingPage" />} />
          <Route path="/Kanbas" element={<Navigate to="/Kanbas/Dashboard" replace />} />
          {/* LandingPage Route */}
          <Route path="/LandingPage" element={<LandingPage />} />
          
          {/* Labs and Kanbas components */}
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;

                                           