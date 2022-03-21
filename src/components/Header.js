import React from "react";
import './App.css';

const Header = () => {
  return (
    <div className="ui fixed menu" style={{borderBottom: '1px solid black'}}>
      <div className="ui container title">
        <h2>Contact Manager</h2>
      </div>
    </div>
  );
};

export default Header;