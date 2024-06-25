import React from 'react'
import Home from './Pages/Home.jsx'
import  UserData  from './Pages/UserData.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/userdata" element={<UserData/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

