import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  //accessing url from firebase
  const { url, progress } = useStorage(file);
  console.log(progress, url);
  //to reset progress bar
  useEffect(() => {
    //if response comes back with url from post request then reset state of file
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return <div className="progress-bar" style={{ width: progress + "%" }}></div>;
};

export default ProgressBar;
