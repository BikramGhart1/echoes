import React, { useState } from 'react'
import Navbar from '../components/partials/Navbar'
import Homepage from '../pages/Homepage'
import SuggestionsSidebar from '../components/partials/SuggestionsSidebar'
import { useHamMenu } from '../contexts/HamMenuContextProvider';

export default function HomePageLayout() {

  const {navbarIsOpen}=useHamMenu();
  
  return (
    <div className='md:grid grid-cols-[1fr_2fr_1fr] gap-3 '>
      <div className={`md:block ${navbarIsOpen?`block`:`hidden`}`}>
       <Navbar/>
      </div>
       <Homepage/>
       <SuggestionsSidebar/>
    </div>
  )
}
