import { useState } from 'react'
import './App.css'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/partials/Navbar';
import HomePageLayout from './layouts/HomePageLayout';
import HamMenuProvider from './contexts/HamMenuContextProvider';
import SpecificPostLayout from './layouts/SpecificPostLayout';
import ProfilePageLayout from './layouts/ProfilePageLayout';
import CreatePostLayout from './layouts/CreatePostLayout';
import { Routes,Route } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';

function App() {
  console.log('hellow world');
  return (
    <>
    <Routes>
      <Route path='/' element={<AuthLayout/>}>
          <Route path='homePage/:password' element={
            <HamMenuProvider>
              <HomePageLayout/>
            </HamMenuProvider>
            }/>
          <Route path='profile/:password' element={
            <HamMenuProvider>
              <ProfilePageLayout/>
            </HamMenuProvider>
            }/>
          <Route path='post/:password' element={
            <HamMenuProvider>
              <SpecificPostLayout/>
            </HamMenuProvider>
            }/>
          <Route path='createPost/:password' element={
            <HamMenuProvider>
              <CreatePostLayout/>
            </HamMenuProvider>
            }/>
      </Route>
      <Route path='/signin' element={<Signup/>}/>
    </Routes>
      {/* <Signup/> */}
      {/* <Login/> */}
      {/* <Navbar/> */}
      {/* <HamMenuProvider> */}
        {/* <HomePageLayout/> */}
        {/* <SpecificPostLayout/> */}
        {/* <ProfilePageLayout/> */}
        {/* <CreatePostLayout/> */}
      {/* </HamMenuProvider> */}

    </>
  )
}

export default App
