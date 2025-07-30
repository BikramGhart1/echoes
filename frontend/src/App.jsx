import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './router/routes.jsx'


function App() {
   console.log('current path', window.location.pathname);
const router=createBrowserRouter(routes);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
