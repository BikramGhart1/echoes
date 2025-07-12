import React from 'react'
import Navbar from '../components/partials/Navbar'
import Homepage from '../pages/Homepage'
import SuggestionsSidebar from '../components/partials/SuggestionsSidebar'

export default function HomePageLayout() {
  return (
    <div className='md:grid grid-cols-[1fr_2fr_1fr] gap-3 '>
      <div className='hidden md:block'>
       <Navbar/>
      </div>
       <Homepage/>
       <SuggestionsSidebar/>
    </div>
  )
}
