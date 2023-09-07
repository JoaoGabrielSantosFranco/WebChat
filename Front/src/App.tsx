import { useState } from 'react'
import './App.css'
import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Join />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  )
}

export default App
