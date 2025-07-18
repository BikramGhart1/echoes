import React from 'react'
import { useHamMenu } from '../contexts/HamMenuContextProvider';
import Navbar from '../components/partials/Navbar';
import ViewPost from '../pages/ViewPost';


export default function SpecificPostLayout() {
  const {navbarIsOpen}=useHamMenu();
    
    return (
      <div className='md:grid grid-cols-[1fr_3fr] gap-3 '>
        <div className={`md:block ${navbarIsOpen?`block`:`hidden`}`}>
         <Navbar/>
        </div>
         <ViewPost/>
      </div>
    )
}
