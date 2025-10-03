import React, { useState, useCallback } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { generateContent, purifyCode } from "./helper";
import { FaMoon, FaSun } from "react-icons/fa";

const App = () => {
  const [info, setInfo] = useState({
    userQuery: "",
    generatedCode: "",
    isLoading: false,
    error: "",
    mood: 'dark'
  });

  const handleChange = useCallback((e) => {
    setInfo((prev) => ({ ...prev, userQuery: e.target.value, error: "", generatedCode: null }));
  }, []);

  const handleMood = () =>{
    setInfo((prev)=>({
      ...prev,
      mood: info.mood==='dark' ? 'light' : 'dark',
    }))
  }

  const handleGenerate = useCallback(async () => {
    if (info.userQuery.trim() === "") {
      toast.error("Please enter a valid query");
      return setInfo((prev) => ({
        ...prev,
        error: "Please enter a valid query",
      }));
    }

    setInfo((prev) => ({ ...prev, isLoading: true, error: "" }));

    try {
      const response = await generateContent(info.userQuery);
      let componentCode = response;
      
      componentCode = purifyCode(componentCode);
      let Component = new Function('React',
        `
        try{
          ${componentCode}
          return GeneratedComponent;
        }catch(err){
          console.error('Component execution error:', err);
          throw new Error('Failed to execute generated component: ' + err.message);
        }
        `
      )(React);

      if (typeof Component !== 'function') {
        throw new Error('Generated code did not return a valid React component');
      }

      setInfo((prev) => ({
        ...prev,
        generatedCode: <Component />,
        isLoading: false,
        userQuery: ''
      }));
    } catch (error) {
      console.error("Generation error:", error);
      setInfo((prev) => ({
        ...prev,
        error: error.message || "Something went wrong, please try again",
        isLoading: false,
      }));
      toast.error("Failed to generate content. Please try again.");
    }
  }, [info.userQuery]);

  return (
    <div className={`parent-container ${info.mood === 'dark' ? 'dark' : ''}`}>
      <div className="mood-container">
        <button onClick={handleMood}>
          {info.mood === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
      </div>
      <div className="preview-container">
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          className="toast-container"
          style={{ color: "red" }}
        />
        {info?.generatedCode ? (
          <span className="component-container">{info?.generatedCode}</span>
        ) : info.isLoading ? (
          <div className="loading-container">
            <FontAwesomeIcon icon={faSpinner} spin size="2x" />
          </div>
        ) : (
          <div className="empty-container">
            <p>
              Describe your react component in input box and click on generate
            </p>
          </div>
        )}
      </div>
      <div className="input-container">
        <textarea
          onChange={handleChange}
          value={info.userQuery}
          className="preview-textarea"
          placeholder="Describe your react component"
        />
        <button className="generate-button" onClick={handleGenerate}>
          <span>Generate</span>
          <FontAwesomeIcon icon={faGem} />
        </button>
      </div>
    </div>
  );
};

export default App;
