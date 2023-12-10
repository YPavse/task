import React, { useState } from 'react';

const Display = () => {
 const [input, setInput] = useState('');

 const handleButtonClick = () => {
    const result = window.prompt('Enter your data:', input);
    if (result !== null) {
      setInput(result);
    }
 };

 return (
    <div>
       <button onClick={handleButtonClick}>plz click</button> 
      <p>Input: {input}</p>
    </div>
 );
};

export default Display;