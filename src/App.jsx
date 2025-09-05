import React from 'react'
import Header from './Components/Header'
import Cards from './Components/cards'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/Cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App