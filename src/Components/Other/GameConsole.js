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

  // Show PollPopUp automatically after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPollPopUp(true);
    }, 3000); // adjust delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="game-console">
      <h3 className="game-intro">
        THE ARCADE
        <FaCircleInfo className="info-icon" />
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

        <div className="game-icon" onClick={() => setShowPollPopUp(true)}>
          <figure>
            <img src={pollIcon} alt="Poll" />
          </figure>
          <figcaption>Vote</figcaption>
        </div>

        <Link to="/releases" className="game-icon">
          <figure>
            <img src={releaseIcon} alt="Releases" />
          </figure>
          <figcaption>Releases Page</figcaption>
        </Link>
      </div>

      <HangManPopup isVisible={showHangman} onClose={() => setShowHangman(false)} />
      <PollPopUp isVisible={showPollPopUp} onClose={() => setShowPollPopUp(false)} />
    </div>
  );
}

export default GameConsole;
