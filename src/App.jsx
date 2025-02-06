import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/login.jsx";
import Mainpage from "./Pages/mainpages.jsx";
import Error404 from "./Pages/Error404.jsx";
import Error500 from "./Pages/Error500.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/404" element={<Error404 />} />
        <Route path="/500" element={<Error500 />} />
      </Routes>
    </Router>
  );
}

export default App;