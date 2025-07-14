import React, { useState } from 'react'
import Navbar from '../components/partials/Navbar'
import Homepage from '../pages/Homepage'
import SuggestionsSidebar from '../components/partials/SuggestionsSidebar'

export default function HomePageLayout() {
  const [navbarIsOpen,setNavbarIsOpen]=useState(false);

  const toggleNavbar=()=>{
    setNavbarIsOpen((navbarIsOpen)=>!navbarIsOpen);
  }
  return (
    <div className='md:grid grid-cols-[1fr_2fr_1fr] gap-3 '>
      <div className={`md:block ${navbarIsOpen?`block`:`hidden`}`}>
       <Navbar navbarIsOpen={navbarIsOpen} toggleNavbar={toggleNavbar}/>
      </div>
       <Homepage toggleNavbar={toggleNavbar}/>
       <SuggestionsSidebar/>
    </div>
  )
}
