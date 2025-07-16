import React, { createContext, useContext, useState } from 'react'

const HamMenuContext=createContext(false);

export default function HamMenuProvider({children}) {
    const [navbarIsOpen,setNavbarIsOpen]=useState(false);
  
    const toggleNavbar=()=>{
      console.log('toggle navbar clicked: ',navbarIsOpen);
      setNavbarIsOpen((navbarIsOpen)=>!navbarIsOpen);
    }
  return (
    <HamMenuContext.Provider value={{navbarIsOpen, toggleNavbar}}>
      {children}
    </HamMenuContext.Provider>
  )
}
export const useHamMenu=()=>{
  return useContext(HamMenuContext);
}