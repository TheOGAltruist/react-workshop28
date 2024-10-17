import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Red from './components/Red'
import Blue from './components/Blue'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to="/">HOME</Link>
          <Link to="/red">RED</Link>
          <Link to="/blue">BLUE</Link>
        </div>
        <div id="main-section">
        <Routes>
          <Route path='/blue' element={<Blue />} />
          <Route path='/red' element={<Red />} />
          <Route path='/' element={<Home />} />
        </Routes>
        </div>
        <div id="navbar">
          <Link to="/">HOME</Link>
          <Link to="/red">RED</Link>
          <Link to="/blue">BLUE</Link>
        </div>
    </div>
    </>
  )
}

export default App
