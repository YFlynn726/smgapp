import React, { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import UploadForm from "./components/Uploadform";
import Image from "./components/Image";
//import Modal from "./components/Modal";

function App() {
  //setting up state so when click img src can be passed to modal comp
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <Image setSelectedImg={setSelectedImg} />
      {/* {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )} */}
    </div>
  );
}

export default App;
