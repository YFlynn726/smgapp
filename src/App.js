import React from "react";
import "./App.css";
import Title from "./Title";
import UploadForm from "./Uploadform";
import Image from "./components/Image";

function App() {
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <Image />
    </div>
  );
}

export default App;
