import React from 'react'
import SigninLeftSection from '../components/sign_in/SigninLeftSection'
import SigninRightSection from '../components/sign_in/SigninRightSection'

export default function Login() {
  return (
    <div className='signinContainer'>
      <SigninLeftSection/>
 
      <form className='signinForm'>
        <h3 className='font-bold md:text-2xl'>Login</h3>
        <fieldset className='signinFieldset'>
        <input type="text" name='username' placeholder='Username' autoComplete='off' className='signinInput'/>
        <input type="password" placeholder='Password' autoComplete='off' className='signinInput'/>

        <input type="submit" className='primaryButton mt-6' value="Login" />
        </fieldset>
        <div className='w-full flex flex-col items-center space-y-2'>
            <p>Don't have an Account?</p>
            <a href="#" >Sign Up</a>
        </div>
      </form>

      <SigninRightSection/>
    </div>
  )
}
