import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './component/Home/home.jsx'
import About from './component/Aboutus/aboutus.jsx'
import Contact from './component/contact/contact.jsx'
import User from './component/user/user.jsx'
import Github, { githunInfoLoader } from './component/github/github.jsx'
import { Info } from './component/info/info.jsx'



// const router=createBrowserRouter([
//   {
//     path:"/", 
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>

//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//     {
//       path:"contact",
//       element:<Contact/>
//     }]

//   }
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>


      <Route path='about' >
        
      <Route path="" element={<About/>}/>
      <Route path='info' element={<Info/>}/>

      </Route>


      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:id' element={<User/>}/>
      <Route path='github' element={<Github/>}
      loader={githunInfoLoader}
      />



    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
