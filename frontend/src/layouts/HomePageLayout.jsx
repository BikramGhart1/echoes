import React, { useState } from 'react'
import Navbar from '../components/partials/Navbar'
import Homepage from '../pages/Homepage'
import SuggestionsSidebar from '../components/partials/SuggestionsSidebar'
import { useHamMenu } from '../contexts/HamMenuContextProvider';

export default function HomePageLayout() {
  return (
    <>
       <Homepage/>
       <SuggestionsSidebar/>
    </>
  )
}
