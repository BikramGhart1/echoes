import React from 'react'

export default function Signup() {
  console.log('signup page');
  return (
       <form className='signinForm'>
        <h3 className='font-bold md:text-2xl'>Sign Up</h3>
        <fieldset className='signinFieldset'>
        <input type="email" placeholder='Email' className='signinInput' autoFocus/>
        <input type="text" name='username' placeholder='Username' autoComplete='off' className='signinInput'/>
        <input type="password" placeholder='Password' autoComplete='off' className='signinInput'/>
        <input type="password" placeholder='Confirm password' className='signinInput'/>

        <input type="submit" className='primaryButton mt-6' value="Sign up" />
        </fieldset>
        <div className='w-full flex flex-col items-center space-y-2'>
            <p>Already have an Account?</p>
            <a href="#">Login</a>
        </div>
      </form>
  )
}
