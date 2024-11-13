import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import { Link, Routes, Route } from "react-router-dom";
import TOC from "./TOC";
import Lab4 from "./Lab4";

import { Provider } from "react-redux";
import store from "./Lab4/store";
import Lab5 from "./Lab5";

export default function Labs() {
  return (
    <Provider store={store}>
    <div>
      <h1>Xian Cao</h1>
      <TOC />
      <h1>Labs</h1>
      <Routes>
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3/*" element={<Lab3 />} />
        <Route path="Lab4/*" element={<Lab4 />} />
        <Route path="Lab5/*" element={<Lab5 />} />
     </Routes>
    </div>
    </Provider>
  );
}
