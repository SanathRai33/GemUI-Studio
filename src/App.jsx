import React from "react";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
    <div className="parent-container">
      <div className="preview-container">
        <div className="empty-container">
          <p>Describe your react component in input box and click on generate</p>
        </div>
      </div>
      <div className="input-container">
        <textarea
          className="preview-textarea"
          placeholder="Describe your react component"
        />
        <button className="generate-button">
          <span>Generate</span> 
          <FontAwesomeIcon icon={faGem} />

        </button>
      </div>
    </div>
  );
};

export default App;
