import React from 'react'
import {Outlet, Navigate} from "react-router-dom"
import useAuthStatus from '../Hooks/useAuthStatus';

//A private route to determine where the site to show
export default function PrivateRoute() {
    const { loggedIn, checkingStatus } = useAuthStatus();
    if (checkingStatus) {
      return <h3>Loading.....</h3>;
    }
    return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
  }