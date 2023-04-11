import React from 'react';
import './Menu.css';

function Menu(props){
  var isVisible = "hide";
  if(props.menuVisibility){
    isVisible = "show";
  }

  return(
     <div onMouseDown={props.handleClick} id="menu" classname={isVisible}>
       <h2><a href="#">{isVisible}</a></h2>
       <h2><a href="#">About</a></h2>
       <h2><a href="#">Contact</a></h2>
       <h2><a href="#">Search</a></h2>
     </div>
  );
}

export default Menu;
