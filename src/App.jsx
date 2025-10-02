import React, { useState, useCallback } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [info, setInfo] = useState({
    userQuery: "",
    generatedCode: "",
    isLoading: false,
    error: "",
  });

  const handleChange = useCallback((e) => {
    setInfo((prev) => ({ ...prev, userQuery: e.target.value, error: "" }));
  }, []);

  const handleGenerate = useCallback(() => {
    if (info.userQuery.trim() === "") {
      toast.error("Please enter a valid query");
      return setInfo((prev) => ({
        ...prev,
        error: "Please enter a valid query",
      }));
    }

    setInfo((prev) => ({ ...prev, isLoading: true, error: '' }));
  }, [info.userQuery]);

  return (
    <div className="parent-container">
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
          info?.generatedCode
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
