import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignOut from './pages/SignOut'
import Header from '../components/Header'
import SignIn from './pages/SignIn'

export default function App() {
  return (
    <BrowserRouter>
    
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/Signin' element = {<SignIn />} />
    <Route path='/signout' element= {<SignOut />} />
    
    
    </Routes>
    
    </BrowserRouter>
  )
}
