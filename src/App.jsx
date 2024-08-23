import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Home from './pages/Home'
import Actors from './pages/Actors'
import Films from './pages/Films'
import "./output.css"

function App() {
  return (
    
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Actors' element={<Actors />} />
          <Route path='/Films' element={<Films />} />

      </Routes>
    </BrowserRouter>
    
  )
}

export default App