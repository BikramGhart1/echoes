import React from 'react'
import { Outlet } from 'react-router-dom'
import SigninLeftSection from '../components/sign_in/SigninLeftSection'
import SigninRightSection from '../components/sign_in/SigninRightSection'
import '../src/index.css'

export default function AuthLayout() {
    console.log('auth layout',  window.location.pathname);
  return (
    <div className='signinContainer'>
        <div className='bg-red-500'>
            <p>hello</p>
        </div>
          <SigninLeftSection/>
          <>
            <Outlet/>
            <p>heyy</p>
          </>
          <SigninRightSection/>
        </div>
  )
}
