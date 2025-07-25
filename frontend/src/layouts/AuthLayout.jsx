import React, { useState } from 'react'
import {Navigate, Outlet, useParams} from 'react-router-dom'

export default function AuthLayout() {
    const {password}=useParams();

    const savedPassword='demo123';

  return password===savedPassword?<Outlet/>:<Navigate to='/signin'/> 
}
