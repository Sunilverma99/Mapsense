import React from 'react'
import Home from './Pages/Home.jsx'
import  UserData  from './Pages/UserData.jsx';
import  { Toaster } from 'react-hot-toast';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/userdata" element={<UserData/>}/>
      </Routes>
      <Toaster/>
    </BrowserRouter>
  );
}

export default App;

