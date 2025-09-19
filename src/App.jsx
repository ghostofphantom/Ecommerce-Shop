import React from 'react'
import Header from './Components/Header' 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element ={<Home/>}/>
      {/* <Route path='/Cart/:id' element={<Cart/>}/> */}
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App