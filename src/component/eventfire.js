import React, { useState } from 'react';

function App() {
  const [buttonClicks, setButtonClicks] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleButtonClick = () => {
    setButtonClicks(prevClicks => prevClicks + 1);
  };

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const handleMouseMove = event => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Click Me</button>
      <p>Button Clicks: {buttonClicks}</p>

      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something"
      />
      <p>Input Value: {inputValue}</p>

      <div
        style={{ width: '300px', height: '300px', backgroundColor: 'lightblue' }}
        onMouseMove={handleMouseMove}
      >
        <p>Mouse Position: X: {mousePosition.x}, Y: {mousePosition.y}</p>
      </div>
    </div>
  );
}

export default App;
