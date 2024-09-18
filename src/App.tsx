import React from "react";
import "./App.css";
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { HashRouter, Routes, Link, Route} from 'react-router-dom';

function App() {
  return (
  
    <HashRouter>
    <div>
      <Routes>
        <Route path="/Kanbas*" element={<Kanbas />}  />
        <Route path="/Labs*" element={<Labs />} />
      </Routes>
    </div>
  </HashRouter>
  );
}

export default App;
                                           