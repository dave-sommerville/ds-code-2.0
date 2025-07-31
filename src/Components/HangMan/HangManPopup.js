import React, { useState, useEffect, useRef } from 'react';
import { hangingMan, getRandomPhrase } from '../HangMan/HangManData';
import DraggablePopup from '../HangMan/DraggableDiv';
import { FaXmark } from 'react-icons/fa6';
import '../../css/hangman.css';

function HangManPopup({ isVisible, onClose, barText }) {
  const [gameRunning, setGameRunning] = useState(false);
  const [phrase, setPhrase] = useState('');
  const [display, setDisplay] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [gallows, setGallows] = useState(hangingMan[6]);
  const [message, setMessage] = useState('HANGMAN');
  const inputRef = useRef(null);

  useEffect(() => {
    if (!isVisible) return;
    setGallows(hangingMan[6]);
    setMessage('HANGMAN');
  }, [isVisible]);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Enter' && inputRef.current && gameRunning) {
        handleGuess(inputRef.current.value);
        inputRef.current.value = '';
      }
    }
    window.addEventListener('keypress', handleKey);
    return () => window.removeEventListener('keypress', handleKey);
  }, [gameRunning, display, wrongGuesses]);

  const startGame = () => {
    const newPhrase = getRandomPhrase();
    const phraseArray = newPhrase.split('');
    setPhrase(newPhrase);
    setDisplay(phraseArray.map(c => (c === ' ' ? ' ' : '_')));
    setWrongGuesses([]);
    setGallows(hangingMan[0]);
    setGameRunning(true);
    setMessage('PHRASE');
    inputRef.current?.focus();
  };

  const handleGuess = (char) => {
    char = char.toLowerCase();
    if (!/^[a-z]$/.test(char)) {
      setMessage('Enter a single letter');
      return;
    }
    if (phrase.toLowerCase().includes(char)) {
      const updated = phrase.split('').map((c, i) =>
        c.toLowerCase() === char ? c : display[i]
      );
      setDisplay(updated);
      if (!updated.includes('_')) {
        setMessage('You win!');
        setGameRunning(false);
      }
    } else {
      if (!wrongGuesses.includes(char)) {
        const updatedWrong = [...wrongGuesses, char];
        setWrongGuesses(updatedWrong);
        setGallows(hangingMan[updatedWrong.length]);
        if (updatedWrong.length >= 5) {
          setMessage('You lose!');
          setGameRunning(false);
          setGallows(hangingMan[hangingMan.length - 1]);
        }
      }
    }
  };

  if (!isVisible) return null;

  return (
    <DraggablePopup barText={barText} onClose={onClose}>
      <div className="hangman-display f-col">
        <div className="game-wrapper f-col">
          <p className={`game-title ${gameRunning ? '' : 'big-font'}`}>{message}</p>
          <p className="word-display">{display.join('')}</p>
          <div className="gallows-container">
            <pre className="gallows">{gallows}</pre>
          </div>
          <p className="wrong-letters">{wrongGuesses.join(', ')}</p>

          <input
            className={`letter-guess ${gameRunning ? '' : 'hidden'}`}
            ref={inputRef}
            maxLength={1}
          />

          <button
            className={`hangman-start btn ${gameRunning ? 'hidden' : ''}`}
            onClick={startGame}
          >
            Start
          </button>
        </div>
      </div>
    </DraggablePopup>
  );
}

export default HangManPopup;
