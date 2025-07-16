import React from 'react'
import { useHamMenu } from '../../contexts/HamMenuContextProvider'

export default function HamburgerMenu() {
    const {navbarIsOpen, toggleNavbar}=useHamMenu();
    const toggleHandler=()=>{
        toggleNavbar();
    }
  return (
    <button className='absolute left-10 md:hidden cursor-pointer' onClick={()=>{toggleHandler()}}>=</button>
  )
}
