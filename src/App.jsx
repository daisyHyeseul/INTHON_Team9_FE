import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import React from 'react'
import Send from './pages/Send'
import View from './pages/View'
import Main from './pages/Main'
import { Link } from 'react-router-dom';

export default function App() {
  
  function Navbar() {
    const location = useLocation();
    if (location.pathname !== '/send') {
      return (
          <nav style={{position : 'absolute'}}>
              <Link to="/main">main</Link>
              <br />
              <Link to="/send">send</Link>
              <br />
              <Link to="/view">view</Link>
          </nav>
      );
    }
    return null;
  }
  

  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
          <Route path="/" element={<Navigate to="/main" />} />
          <Route path="/main" element={<Main/>} />
          <Route path="/send" element={<Send/>} />
          <Route path="/view" element={<View />} />
      </Routes>
    </Router>
  )
}