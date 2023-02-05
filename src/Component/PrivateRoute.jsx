import React from 'react'
import {Outlet, Navigate} from "react-router-dom"
import useAuthStatus from '../Hooks/useAuthStatus';
import Spinner from './Spinner';

//A private route to determine where the site to show
export default function PrivateRoute() {
    const { loggedIn, checkingStatus } = useAuthStatus();
    if (checkingStatus) {
      return <Spinner/>;
    }
    return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
  }