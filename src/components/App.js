import React from 'react';
import './style.css';
import {useState} from 'react';

function App() {
  const [visible,setVisible] = useState('false');

  const isCliked = (e)=>{
    console.log('visible',visible,e);
    setVisible(!visible);
    // e.stopPropagation();
  }
  return (
    <div>
      <button onMouseDown={(e) => isCliked()} className="eye">
        <div className="eye-boll"></div>
      </button>
      <div className="list">
        <p>Can you spot the item that doesn't belong?</p>
        <ul>
          <li>Lorem</li>
          <li>ipsum</li>
          <li>dollar</li>
          <li>Sit</li>
          <li>Bumblebees</li>
          <li>Aenean</li>
          <li>Consectetur</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
