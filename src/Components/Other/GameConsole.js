import { useState, useEffect } from 'react';
import HangManPopup from '../HangMan/HangManPopup';
import PollPopUp from '../../Components/Other/PollPopUp'; // adjust path as needed
import blackjackIcon from '../../media/img/icons/black-jack.png';
import scriptIcon from '../../media/img/icons/desert.png';
import codeIcon from '../../media/img/icons/terminal.png';
import boogleIcon from '../../media/img/icons/boggle.png';
import hangmanIcon from '../../media/img/icons/hangman.png';
import releaseIcon from '../../media/img/icons/releases.png';
import pollIcon from '../../media/img/icons/pop-up.png'; // add an icon for poll
import { FaCircleInfo } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import '../../css/hangman.css';

function GameConsole() {
  const [showHangman, setShowHangman] = useState(false);
  const [showPollPopUp, setShowPollPopUp] = useState(false);
  const [hasClickedPollIcon, setHasClickedPollIcon] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPollPopUp(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handlePollClick = () => {
    setShowPollPopUp(true);
    setHasClickedPollIcon(true); // ✅ stop shaking after first click
  };

  return (
    <div className="game-console">
      <h3 className="game-intro">
        THE ARCADE
      </h3>
      <div className="icon-wrapper">
        <a href="" target="_blank" className="game-icon">
          <figure>
            <img src={blackjackIcon} alt="Blackjack" />
          </figure>
          <figcaption>Blackjack</figcaption>
        </a>
        <a href="" target="_blank" className="game-icon">
          <figure>
            <img src={scriptIcon} alt="Script Scavengers" />
          </figure>
          <figcaption>Script Scavengers</figcaption>
        </a>
        <a href="" target="_blank" className="game-icon">
          <figure>
            <img src={codeIcon} alt="Code Breaker" />
          </figure>
          <figcaption>Code Breaker</figcaption>
        </a>
        <a href="" target="_blank" className="game-icon">
          <figure>
            <img src={boogleIcon} alt="Boogle" />
          </figure>
          <figcaption>Boogle</figcaption>
        </a>
        <div className="game-icon" onClick={() => setShowHangman(true)}>
          <figure>
            <img src={hangmanIcon} alt="Hangman" />
          </figure>
          <figcaption>Hangman</figcaption>
        </div>
        <Link to="/releases" className="game-icon">
          <figure>
            <img src={releaseIcon} alt="Releases" />
          </figure>
          <figcaption>Releases Page</figcaption>
        </Link>
      </div>
      <div
        className={`game-icon flex-end ${!hasClickedPollIcon ? 'shake-me' : ''}`}
        onClick={handlePollClick}
      >
        <figure>
          <img src={pollIcon} alt="Poll" />
        </figure>
        <figcaption>Vote</figcaption>
      </div>
      <HangManPopup barText="Hangman" isVisible={showHangman} onClose={() => setShowHangman(false)} />
      <PollPopUp barText="Monthly Poll" isVisible={showPollPopUp} onClose={() => setShowPollPopUp(false)} />
    </div>
  );
}

export default GameConsole;
