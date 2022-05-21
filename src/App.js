import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "./Pages/Admin";
import Courses from "./Pages/Courses";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignIn from "./Pages/SignIn";

const App = () => {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/courses' exact element={<Courses />} />
      <Route path='/register' exact element={<SignIn />} />
      <Route path='/administration' exact element={<Admin />} />
      <Route path='/login' exact element={<Login />} />
    </Routes>
  );
};

export default App;
