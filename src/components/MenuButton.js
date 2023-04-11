import React from 'react';
import './MenuButton.css';

function MenuButton(props) {

  return (
    <button onClick={props.clickEvent} className="eye"></button>
  );
}

export default MenuButton;