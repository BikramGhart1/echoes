import React from 'react'
import { Outlet } from 'react-router-dom'
import SigninLeftSection from '../components/sign_in/SigninLeftSection'
import SigninRightSection from '../components/sign_in/SigninRightSection'

export default function AuthLayout() {
    console.log('auth layout',  window.location.pathname);
  return (
    <div className='signinContainer'>
          <SigninLeftSection/>
          <>
            <Outlet/>
          </>
          <SigninRightSection/>
        </div>
  )
}
