import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  //states - using hooks
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  //creating variable for allowed files to check file type in validation
  const types = [
    "image/png",
    "image/jpeg",
    "image/svg",
    "image/gif",
    "image/pdf",
    "image/heif",
    "image/webp",
    "image/heic",
  ];

  //function for onChange
  const changeHandler = (e) => {
    let selected = e.target.files[0];
    //validating file is selected, type, and size
    if (selected && types.includes(selected.type) && selected.size <= 1000000) {
      //updating state & error message
      setFile(selected);
      setError(" ");
    } else {
      setFile(null);
      setError("Please select an image file(png, jpeg, or pdf)");
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>
          <i className="fas fa-plus-square"></i>
        </span>
      </label>
      <div className="error-message">
        {error && <div className="error">{error}</div>}
        {file && <div className="file-name">{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
