import React, { useEffect, useRef, useState } from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import GreetingCard from './components/GreetingCard';
import FinalSurprise from './components/FinalSurprise';
import Confetti from 'react-confetti'; // Import the confetti component
import hbdSong from './music/happy_birthday_instr.mp3'; // Ensure the path is correct
import Login from './Login'; // Import the Login component
import { Link } from 'react-router-dom';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
  useEffect(() => {
    // Store the login state in localStorage so it's preserved across sessions
    localStorage.setItem("isLoggedIn", isLoggedIn ? "true" : "false");
  }, [isLoggedIn]);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
          <Route path="/greeting-card" element={<GreetingCard />} />
          <Route path="/final-surprise" element={<FinalSurprise />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => {
  const audioRef = useRef(null);

  // Auto-play the audio when the component is mounted
  useEffect(() => {
    // This will ensure that the audio starts playing as soon as the page loads
    const audio = audioRef.current;
    if (audio) {
      audio.play(); // Play audio
    }
  }, []); // Empty dependency array ensures it only runs once on page load

  return (
    <div className="home-container">
      {/* Confetti Effect */}
      <Confetti width={window.innerWidth} height={window.innerHeight} />

      <div className="happy-birthday">Happiest Birthday Bebuuu! ❤</div>
      <div className="cake-container">
        <div className="cake">
          <div className="candle"></div>
          <div className="candle"></div>
          <div className="candle"></div>
        </div>
      </div>
      <button className="button" onClick={() => navigate('/greeting-card')}>
        Big surprise is waiting for you !! Click Here !!
      </button>
      
      {/* Audio Player (Auto-play on page load) */}
      <audio ref={audioRef} autoPlay loop>
        <source src={hbdSong} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default App;