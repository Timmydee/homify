// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Container/Home"
import ForgotPass from "./Container/ForgotPass"
import Offers from "./Container/Offers"
import SignIn from "./Container/SignIn"
import SignUp from "./Container/SignUp"
import Profile from "./Container/Profile"
import Header from "./Component/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>      
          <Route path="/" element={<Home />} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/sign-in' element={<SignIn/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/forgot-pass' element={<ForgotPass/>} />
          <Route path='/offers' element={<Offers/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
