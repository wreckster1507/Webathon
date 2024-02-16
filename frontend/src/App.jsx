
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Faculty from './pages/Faculty'
import Clubs from './pages/Clubs'
import Announcements from './pages/Announcements'
import Vision from './pages/Vision'

import Gallery from './pages/Gallery'



function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/" element={<Announcements />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/gallery" element={<Gallery />} />

      </Routes>
    </div>
  )
}

export default App
