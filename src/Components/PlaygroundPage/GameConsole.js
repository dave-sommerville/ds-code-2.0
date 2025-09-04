import { useState, useEffect } from 'react';
import HangManPopup from '../PlaygroundPage/Retro/HangManPopup';
import PollPopUp from '../PlaygroundPage/Retro/PollPopUp'; 
import blackjackIcon from '../../media/img/icons/black-jack.png';
import scriptIcon from '../../media/img/icons/desert.png';
import codeIcon from '../../media/img/icons/terminal.png';
import boogleIcon from '../../media/img/icons/boggle.png';
import hangmanIcon from '../../media/img/icons/hangman.png';
import whackaMoleIcon from '../../media/img/icons/mallet.png';
import releaseIcon from '../../media/img/icons/releases.png';
import pollIcon from '../../media/img/icons/pop-up.png';
import { Link } from 'react-router-dom';

function GameConsole() {
  const [showHangman, setShowHangman] = useState(false);
  const [showPollPopUp, setShowPollPopUp] = useState(false);
  const [hasClickedPollIcon, setHasClickedPollIcon] = useState(false);


  const handlePollClick = () => {
    setShowPollPopUp(true);
    setHasClickedPollIcon(true); // ✅ stop shaking after first click
  };

  return (
    <div className="game-console">
      <div className="icon-wrapper">
        <a href="https://dave-sommerville.github.io/blackjack/" target="_blank" rel="noopener noreferrer"  className="game-icon">
          <figure>
            <img src={blackjackIcon} alt="Blackjack" />
          </figure>
          <figcaption>Blackjack</figcaption>
        </a>
        <a href="https://dave-sommerville.github.io/script-scavengers/" target="_blank" rel="noopener noreferrer"  className="game-icon">
          <figure>
            <img src={scriptIcon} alt="Script Scavengers" />
          </figure>
          <figcaption>Script Scavengers</figcaption>
        </a>
        <a href="https://dave-sommerville.github.io/code-breaker/" target="_blank" rel="noopener noreferrer" className="game-icon">
          <figure>
            <img src={codeIcon} alt="Code Breaker" />
          </figure>
          <figcaption>Code Breaker</figcaption>
        </a>
        <a href="https://dave-sommerville.github.io/boogle/" target="_blank" rel="noopener noreferrer" className="game-icon">
          <figure>
            <img src={boogleIcon} alt="Boogle" />
          </figure>
          <figcaption>Boogle</figcaption>
        </a>
        <a href="https://dave-sommerville.github.io/whack-a-hole/" target="_blank" rel="noopener noreferrer"  className="game-icon new">
          <figure>
            <img src={whackaMoleIcon} alt="Boogle" />
          </figure>
          <figcaption>Whack a Mole</figcaption>
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
        className={`game-icon flex-end mb-10 ${!hasClickedPollIcon ? 'shake-me' : ''}`}
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
