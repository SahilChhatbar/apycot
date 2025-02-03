import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/login.jsx";
import Mainpage from "./Pages/mainpages.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/mainpage" element={<Mainpage />} />
      </Routes>
    </Router>
  );
}

export default App;