import React from 'react';
import './MenuButton.css';

function MenuButton(props) {
  console.log(props.clickEvent);

  return (
    <button onClick={props.clickEvent} className="eye"></button>
  );
}

export default MenuButton;