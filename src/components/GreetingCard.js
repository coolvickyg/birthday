import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import charmImg from '../images/charm.jpg';
import lovImg from '../images/loving.jpg';
import tripImg from '../images/trip.jpg';
import fierceImg from '../images/fierce.jpg';
import dinnerImg from '../images/dinner.jpg';
import cutieImg from '../images/cutie.jpg';
import glamImg from '../images/glamour.jpg';
import bdImg from '../images/bd.jpg';
import './GreetingCard.css';

const milestones = [
  { title: 'CHARMING', subtitle: 'DYU ART CAFE', image: charmImg, text: 'Baby, it feels like yesterday when we first met. I never thought we will be this close one day but I am really glad we are together. The day when we met was magical, I felt so good and was thinking about you all the time. I am really glad to meet you and to have you in my life baby!' },
  { title: 'COMPASSIONATE', subtitle: 'PONDICHERRY', image: lovImg, text: 'And then slowly i got to know more sides of you that you love animals and you are soo compassionate towards them. You are scared of petting them because you think they might bite you but you still try and I am soo proud of you for that bebuu! and remember pets love you too so never stop trying to pet them my bachhu' },
  { title: 'ADVENTUROUS', subtitle: 'NANDI HILLS', image: tripImg, text: 'And then our first trip happened, ik this trip happened after a long time and was not that great. But I am really glad that it happened, its unforgettable and we surely made some happy memories. When we were walking top par and we had our first tea together. And prolly that is one and only time when you had tea with me. I am soo happyy yayy!!' },
  { title: 'FIERCE', subtitle: 'KAILASH PARBAT', image: fierceImg, text: 'And Ofcourse, you are my strong and fierce chotu don, You are really amazing and you are strict about the things that you care and I really love this about you my baby and and remember we got that dog and pig after we went out of this restaurant.' },
  { title: 'GOURMET', subtitle: "KAPOOR'S CAFE", image: dinnerImg, text: 'And Our malkin jii lovess tasty tasty acchha khana, Ik your love for good food my baby, You know how to cook mast mast dishes and you make them sooo well, its mouth watering. But you do not have to anymore I will cook mast tasty tasty khana for you baby, and you will be the judge of it and mujhe batana aap dishes me aur kya better kar sakte hai okay?' },
  { title: 'GLAMOROUS', subtitle: 'GARDEN BY SU', image: glamImg, text: 'And OMGGG what a beauty you are baby, your asthetics, your style, your dressing sense, you slay in each and every outfit my lil princess. I am soo amazed everytime I see you my prettyy gurll ! and yes I am sorry for not taking your any good pictures that day :(' },
  { title: 'ADORABLE', subtitle: 'DIWALI', image: cutieImg, text: 'and finallyy myy cutiee patootie, sweetuu adorable bachhii. You are sooo soooo cuteee like a babyy. Mann toh karta hai bas aise aapke gaalo ko pull karu cutuu bachhuuu , Muaaaaaa' },
  { title: 'BIRTHDAY GIRL', image: bdImg}
];

const GreetingCard = () => {
  const navigate = useNavigate();
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  const handleClick = (milestone, index) => {
    if (index === 7) {
      // Redirect to the Final Surprise page when clicking the eighth milestone
      navigate('/final-surprise');
    } else {
      setSelectedMilestone(milestone);
    }
  };

  const closeModal = () => {
    setSelectedMilestone(null);
  };

  return (
    <div className="card-container">
      <div className="greeting-card-grid">
        {milestones.map((milestone, index) => (
          <div key={index} className="milestone" onClick={() => handleClick(milestone, index)}>
            <div className="card text-dark card-has-bg">
              <div className="card-body">
                <h4 className="card-title">{milestone.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedMilestone && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <img src={selectedMilestone.image} alt={selectedMilestone.title} className="modal-image" />
            <h2 className="modal-subtitle">{selectedMilestone.subtitle}</h2>
            <p>{selectedMilestone.text}</p>
            <button className="back-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
      <button className="back-button" onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

export default GreetingCard;