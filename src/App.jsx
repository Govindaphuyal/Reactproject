import Navbar from './Navbar.jsx';
import Contact from './contact.jsx';
import Home from './Home.jsx';
import Project from './Project.jsx';
import About from './About.jsx';
import Animate from './animate.jsx';

import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Animate/>
    },
    {
      path: "/home",
      element: <Home/>
    },
    {
      path:"/contact",
      element:<><Navbar/><Contact/></>
    },
    {
      path:"/project",
      element:<><Navbar/><Project/></>
    },
    {
      path:"/about",
      element:<><Navbar/><About/></>

    }
  ]);
  return (
    <>
    <RouterProvider router={router} />
      
    </>
  )
}

export default App
