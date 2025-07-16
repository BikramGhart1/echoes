import { useState } from 'react'
import './App.css'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/partials/Navbar';
import HomePageLayout from './layouts/HomePageLayout';
import HamMenuProvider from './contexts/HamMenuContextProvider';

function App() {
  console.log('hellow world');
  return (
    <>
      {/* <Signup/> */}
      {/* <Login/> */}
      {/* <Navbar/> */}
      <HamMenuProvider>
        <HomePageLayout/>
      </HamMenuProvider>

    </>
  )
}

export default App
