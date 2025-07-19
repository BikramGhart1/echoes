import { useState } from 'react'
import './App.css'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/partials/Navbar';
import HomePageLayout from './layouts/HomePageLayout';
import HamMenuProvider from './contexts/HamMenuContextProvider';
import SpecificPostLayout from './layouts/SpecificPostLayout';
import ProfilePageLayout from './layouts/ProfilePageLayout';

function App() {
  console.log('hellow world');
  return (
    <>
      {/* <Signup/> */}
      {/* <Login/> */}
      {/* <Navbar/> */}
      <HamMenuProvider>
        {/* <HomePageLayout/> */}
        {/* <SpecificPostLayout/> */}
        <ProfilePageLayout/>
      </HamMenuProvider>

    </>
  )
}

export default App
