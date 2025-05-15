import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import AudioToggle from './components/AudioToggle'

import Home from './pages/Home'
import Music from './pages/Music'
import Madden from './pages/Madden'
import Journal from './pages/Journal'
import About from './pages/About'

export default function App() {
    return (
        <>
        <Navbar />
        <AudioToggle />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/music" element={<Music />} />
            <Route path="/madden" element={<Madden />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/about" element={<About />} />
        </Routes>
        </>
    )
}