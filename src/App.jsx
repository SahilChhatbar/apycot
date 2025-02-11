import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn.jsx";
import UserDashBoard from "./Pages/UserDashBoard.jsx";
import Error404 from "./Pages/Error404.jsx";
import Error500 from "./Pages/Error500.jsx";
import UserProfile from "./Pages/UserProfile.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} /> 
        <Route path="/mainpage" element={<UserDashBoard />} />
        <Route path="/404" element={<Error404 />} />
        <Route path="/500" element={<Error500 />} />
        <Route path="/user" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;