import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import DateTime from "./pages/DateTime";
import Location from "./pages/Location";
import Result from "./pages/Result";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/datetime" element={<DateTime />} />
      <Route path="/location" element={<Location />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;