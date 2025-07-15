import React, { useState, useEffect, useRef } from 'react';
import { FaXmark } from 'react-icons/fa6';
import './Hangman.css';

const hangingMan = [
  `++---+\n||\u00A0\u00A0\u00A0\n||\u00A0\u00A0\u00A0\n||\u00A0\u00A0\u00A0\n||______`,
  `++---+\n||\u00A0\u00A0\u00A0O\n||\u00A0\u00A0\u00A0\n||\u00A0\u00A0\u00A0\n||______`,
  `++---+\n||\u00A0\u00A0\u00A0O\n||\u00A0\u00A0\u00A0|\n||\u00A0\u00A0\u00A0\n||______`,
  `++---+\n||\u00A0\u00A0\u00A0O\n||\u00A0\u00A0/|\n||\u00A0\u00A0\u00A0\n||______`,
  `++---+\n||\u00A0\u00A0\u00A0O\n||\u00A0\u00A0/|\\\n||\u00A0\u00A0\u00A0\n||______`,
  `++---+\n||\u00A0\u00A0\u00A0O\n||\u00A0\u00A0/|\\\n||\u00A0\u00A0/ \n||______`,
  `++---+\n||\u00A0\u00A0\u00A0O\n||\u00A0\u00A0/|\\\n||\u00A0\u00A0/ \\\n||______`
];

const hangmanPhrases = [
  'Quick brown fox', 'Jump over the fence', 'Life is a journey',
  'Home sweet home', 'Time heals all wounds', 'Better late than never',
  'Lost in the moment', 'Sky full of stars', 'Catch me if you can',
  'Dreams come true', 'Keep it simple', 'Live and let live',
  'Under the weather', 'Break the silence', 'Chasing the wind',
  'Eyes on the prize'
];

function getRandomPhrase() {
  return hangmanPhrases[Math.floor(Math.random() * hangmanPhrases.length)];
}

function HangManPopup({ isVisible, onClose }) {
  const [gameRunning, setGameRunning] = useState(false);
  const [phrase, setPhrase] = useState('');
  const [display, setDisplay] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [gallows, setGallows] = useState(hangingMan[6]);
  const [message, setMessage] = useState('HANGMAN');
  const inputRef = useRef(null);
  const popupRef = useRef(null);
  const dragBarRef = useRef(null);

  useEffect(() => {
    if (!isVisible) return;
    setGallows(hangingMan[6]);
    setMessage('HANGMAN');
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = '');
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
        }
      }
    }
  };

  // Drag behavior
  useEffect(() => {
    const popup = popupRef.current;
    const drag = dragBarRef.current;
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    const onMouseDown = (e) => {
      isDragging = true;
      offsetX = e.clientX - popup.offsetLeft;
      offsetY = e.clientY - popup.offsetTop;
    };
    const onMouseMove = (e) => {
      if (!isDragging) return;
      popup.style.left = `${e.clientX - offsetX}px`;
      popup.style.top = `${e.clientY - offsetY}px`;
    };
    const onMouseUp = () => (isDragging = false);

    drag.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      drag.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pop-out" ref={popupRef}>
      <div className="hangman-display f-col">
        <div className="top-bar flex">
          <div className="drag-bar" ref={dragBarRef}></div>
          <div className="exit-game pointer" onClick={onClose}>
            <FaXmark />
          </div>
        </div>

        <div className="game-wrapper f-col">
          <p className={`game-title ${gameRunning ? '' : 'big-font'}`}>{message}</p>
          <p className="word-display">{display.join('')}</p>
          <div className="gallows-container">
            <p className="gallows">{gallows}</p>
          </div>
          <p className="wrong-letters">{wrongGuesses.join(', ')}</p>

          <input
            className={`letter-guess ${gameRunning ? '' : 'hidden'}`}
            ref={inputRef}
            maxLength={1}
          />

          <button
            className="hangman-start pointer hover"
            onClick={startGame}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
}
export default HangManPopup;