import { useState } from 'react'
import './App.css'
import Signup from './pages/Signup';
import HomePageLayout from './layouts/HomePageLayout';
import HamMenuProvider, { useHamMenu } from './contexts/HamMenuContextProvider';
import { Routes,Route, Outlet, Navigate } from 'react-router-dom';
import AuthLayout from './layouts/ProtectedLayout';
import MainLayout from './layouts/MainLayout';
import Profilepage from './pages/Profilepage';
import ViewPost from './pages/ViewPost';
import CreatePost from './pages/CreatePost';
import ProtectedLayout from './layouts/ProtectedLayout';
import Login from './pages/Login';
import FileNotFound from './pages/FileNotFound';

function App() {
   console.log('current path', window.location.pathname);
  return (
    <Routes>
      <Route path='/protected' element={<ProtectedLayout/>}>
        <Route path='routes' element={<HamMenuProvider><MainLayout/></HamMenuProvider>}>
            <Route index element={<HomePageLayout/>}/>
            <Route path='profile' element={<Profilepage/>}/>
            <Route path='post' element={<ViewPost/>}/>
            <Route path='create-post' element={<CreatePost/>}/>        
        </Route>
      </Route>

      <Route path='/auth' element={<AuthLayout/>}>
        <Route index element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
      </Route>

      <Route path='*' element={<FileNotFound/>}/>
    </Routes>
  )
}

export default App
