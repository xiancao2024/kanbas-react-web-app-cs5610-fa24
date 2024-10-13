import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import { Link, Routes, Route } from "react-router-dom";
import TOC from "./TOC";

export default function Labs() {
  return (
    <div>
      <h1>Xian Cao</h1>
      <TOC />
      <h1>Labs</h1>
      <Routes>
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
     </Routes>
    </div>
  );
}