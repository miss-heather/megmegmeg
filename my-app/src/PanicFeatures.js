import React, { useState, useEffect } from 'react';
import './css/panic.css';

const PanicFeatures = () => {
  const [timer, setTimer] = useState(5);
  const [countdownActive, setCountdownActive] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);
  const [calling911, setCalling911] = useState(false);

  useEffect(() => {
    let interval = null;

    if (countdownActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    if (timer === 0) {
      clearInterval(interval);
      setCalling911(true);
    }

    return () => clearInterval(interval);
  }, [countdownActive, timer]);

  const handleMouseDown = () => {
    setCountdownActive(false);
    setTimer(5);
    setButtonActive(true);
    setCalling911(false);
  };

  const handleMouseUp = () => {
    setButtonActive(false);
    setCountdownActive(true);
  };

  const callEmergencyServices = () => {
    // Code to call 911 or emergency services goes here
    console.log('Calling 911...');
  };

  return (
    <div>
      <h2>Panic Button!</h2>
      <button
        className={`panic-button ${buttonActive ? 'grey' : ''}`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onClick={callEmergencyServices}
      >
        {countdownActive ? (
          <span className="countdown">{timer}</span>
        ) : (
          'Safe'
        )}
      </button>
      {calling911 && <p>Calling 911...</p>}
    </div>
  );
};

export default PanicFeatures;
