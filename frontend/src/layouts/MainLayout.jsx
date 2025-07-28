import React from 'react'
import Navbar from '../components/partials/Navbar'
import { useHamMenu } from '../contexts/HamMenuContextProvider';
import { Outlet, useLocation } from 'react-router-dom';

export default function MainLayout() {
      const {navbarIsOpen}=useHamMenu();
      const location =useLocation();
      const isHomePage=location.pathname==='/';
    //   const isHomePage=location.pathname.match(/^\/[^\/]+\/?$/);
    
  return (
    <div className={`md:grid ${isHomePage?`grid-cols-[1fr_2fr_1fr]`:`grid-cols-[1fr_3fr]`}  gap-3 `}>
         <div className={`md:block ${navbarIsOpen?`block`:`hidden`}`}>
          <Navbar/>
         </div>
         <Outlet/>
       </div>
  )
}
