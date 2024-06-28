import React from "react";
import Home from "./Pages/Home.jsx";
import UserData from "./Pages/UserData.jsx";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.users);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {user.length > 0 ? (
          <Route path="/userdata" element={<UserData />} />
        ) : (
          <Route path="/userdata" element={<Home />} />
        )}
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
