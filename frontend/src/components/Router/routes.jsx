import AuthLayout from "../../layouts/AuthLayout";
import HomePageLayout from "../../layouts/HomePageLayout";
import MainLayout from "../../layouts/MainLayout";
import ProtectedLayout from "../../layouts/ProtectedLayout";
import CreatePost from "../../pages/CreatePost";
import Login from "../../pages/Login";
import Profilepage from "../../pages/Profilepage";
import Signup from "../../pages/Signup";
import ViewPost from "../../pages/ViewPost";

const routes=[
    {
      path:"/",
      element:<ProtectedLayout/>,
      children:[
        {
          element:<MainLayout/>,
          children:[
              {index:true, element:<HomePageLayout/>},
              {path:'profile', element:<Profilepage/>},
              {path:'post', element:<ViewPost/>},
              {path:'create-post',element:<CreatePost/>}
          ]
        }
      ]
    },
    {
      path:"/auth",
      element:<AuthLayout/>,
      children:[
        {index:true, element:<Login/>},
        {path:'signup', element:<Signup/>}
      ]
    }
]

export default routes;