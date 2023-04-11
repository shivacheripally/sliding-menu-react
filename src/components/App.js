import React,{useState} from 'react';
import './App.css';
import Menu from './Menu.js';
import MenuButton from './MenuButton.js';
function App() {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    console.log('visible', visible);
    setVisible(!visible);
    // e.stopPropagation();
  };
  return (
    <>
      <MenuButton clickEvent={handleClick} menuVisibility={visible} />
      <Menu clickEvent={handleClick}/>

      <div>
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
    </>
  );
}

export default App;
