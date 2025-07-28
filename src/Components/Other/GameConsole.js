import React, { useState } from 'react';
import HangManPopup from '../HangMan/HangManPopup';
import blackjackIcon from '../../media/img/icons/black-jack.png';
import scriptIcon from '../../media/img/icons/desert.png';
import codeIcon from '../../media/img/icons/terminal.png';
import boogleIcon from '../../media/img/icons/boggle.png';
import hangmanIcon from '../../media/img/icons/hangman.png';
import { FaCircleInfo } from 'react-icons/fa6';
import {Link} from 'react-router-dom';
import '../../css/hangman.css';

function GameConsole() {
  const [showHangman, setShowHangman] = useState(false);
  const [showPollPopUp, setShowPollPopUp] = useState(false);

  return(
    <div className="game-console">
      <h3 className="game-intro">
        THE ARCADE
        <FaCircleInfo className="info-icon"/>
      </h3>
      <div className="icon-wrapper">
        <a href="" target="_blank" className="game-icon">
          <figure>
            <img src={blackjackIcon}></img>
          </figure>
          <figcaption>Blackjack</figcaption>
        </a>
        <a href="" target="_blank" className="game-icon">
          <figure>
            <img src={scriptIcon}></img>
          </figure>
          <figcaption>Script Scavengers</figcaption>
        </a>
        <a href="" target="_blank" className="game-icon">
          <figure>
            <img src={codeIcon}></img>
          </figure>
          <figcaption>Code Breaker</figcaption>
        </a>
        <a href="" target="_blank" className="game-icon">
          <figure>
            <img src={boogleIcon}></img>
          </figure>
          <figcaption>Boogle</figcaption>
        </a>
        <div className="game-icon" onClick={() => setShowHangman(true)}>
          <figure>
            <img src={hangmanIcon}></img>
          </figure>
          <figcaption>Hangman</figcaption>
        </div>
        <Link to="/releases" className="game-icon">
          <figure>
            <img src=""></img>
          </figure>
          <figcaption>Hangman</figcaption>
        </Link>
      </div>

      <HangManPopup isVisible={showHangman} onClose={() => setShowHangman(false)} />
    </div>
  );
}

export default GameConsole;