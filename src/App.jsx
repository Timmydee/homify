// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Container/Home"
import ForgotPass from "./Container/ForgotPass"
import Offers from "./Container/Offers"
import SignIn from "./Container/SignIn"
import SignUp from "./Container/SignUp"
import Profile from "./Container/Profile"
import Header from "./Component/Header";

import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./Component/PrivateRoute";
import CreateList from "./Container/CreateList";
import EditListing from "./Container/EditListing";
import Listing from "./Container/Listing";
import CreateItem from "./Container/CreateItem"

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>      
          <Route path="/" element={<Home />} />
          {/* route the privateRoute with profile, so it passes through proute first */}
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile/>} />
          </Route>      
          
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-pass' element={<ForgotPass />} />
          <Route path='/offers' element={<Offers/>} />
          <Route path='/category/:categoryName/:listingId' element={<Listing/>} />
          <Route path="/create-list" element={<PrivateRoute/>}>
            <Route path='/create-list' element={<CreateList/>} />
          </Route>
          
          <Route path="/create-item" element={<PrivateRoute/>}>
            <Route path='/create-item' element={<CreateItem/>} />
          </Route>

          <Route path="edit-listing" element={<PrivateRoute />}>
            <Route path="/edit-listing/:listingId" element={<EditListing />} />
          </Route>
          
        </Routes>
      </Router>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default App
