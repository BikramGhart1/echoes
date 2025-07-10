import React from 'react'
import SigninLeftSection from '../components/sign_in/SigninLeftSection'
import SigninRightSection from '../components/sign_in/SigninRightSection'

export default function Signup() {
  return (
    <div className='signinContainer'>
     <SigninLeftSection/>

      <form className='signinForm'>
        <h3 className='font-bold md:text-2xl'>Sign Up</h3>
        <fieldset className='signinFieldset'>
        <input type="email" placeholder='Email' className='signinInput' autoFocus/>
        <input type="text" name='username' placeholder='Username' autoComplete='off' className='signinInput'/>
        <input type="password" placeholder='Password' autoComplete='off' className='signinInput'/>
        <input type="password" placeholder='Confirm password' className='signinInput'/>

        <input type="submit" className='signinSubmitButton' value="Sign up" />
        </fieldset>
        <div className='w-full flex flex-col items-center space-y-2'>
            <p>Already have an Account?</p>
            <a href="#">Login</a>
        </div>
      </form>
      <SigninRightSection/>
    </div>
  )
}
