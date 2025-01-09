import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FinalSurprise.css';
import confetti from 'canvas-confetti'; // Import the confetti library
import finalImage from '../images/bd.jpg'; // Add your final surprise image
import hbdSong from '../music/happy_birthday_instr.mp3';

const FinalSurprise = () => {
  const navigate = useNavigate();

  // Trigger confetti effect on page load
  useEffect(() => {
    confetti({
      particleCount: 200,
      spread: 90,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="surprise-container">
      {/* Floating Hearts */}
      {[...Array(10)].map((_, i) => (
        <div key={i} className="heart" style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 3}s` }}></div>
      ))}

      <div className="message">
        <h1>You're my everything! ❤️</h1>
        <div className="final-image-box">
          <img src={finalImage} alt="Final Surprise" className="final-image" />
        </div>

        <p>Happiest Birthday, my love! Hope you have an amazing 23rd and all your dreams come true. I love you soo much and I wish all the good things happen to you because you deserve all of them baby. Here's to many more beautiful moments together! ✨❤</p>
      </div>
      <button className="back-button" onClick={() => navigate('/')}>Back to Home</button>

      <audio autoPlay loop>
        <source src={hbdSong} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default FinalSurprise;
