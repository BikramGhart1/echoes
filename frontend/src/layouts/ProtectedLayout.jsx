import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'

export default function ProtectedLayout() {
    const token=false;
    
    
    console.log('protected route rendered',  window.location.pathname);
  return token?<Outlet/>:<Navigate to='/auth' replace/>
  // return token ?<Outlet/>:<p>Hello</p>
}
