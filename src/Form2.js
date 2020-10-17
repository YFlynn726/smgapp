import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  //my initial state is set to null until user selects a file then it will be updated with fileSelectedHandler
  state = {
    selectedFile: null,
  };

  fileSelectedHandler = (event) => {
    //update my state
    this.setState({
      selectedFile: event.target.files[0],
    });
  };

  fileUploadHandler = () => {
    //handling the click for the upload button
    //send http request using axios library and firebase

    //construct form data
    const fd = new FormData();
    fd.append("image", this.state.selectedFile, this.state.selectedFile.name);
    //use my firebase endpoint to store file in firebase storage
    axios
      .post(
        "https://console.firebase.google.com/project/smgapp-3ebd5/storage/smgapp-3ebd5.appspot.com/files",
        fd
      )
      .then((res) => {
        console.log(res);
      });
  };
  render() {
    return (
      <div className="App">
        <input
          style={{ display: "none" }}
          type="file"
          ref={(fileInput) => (this.fileInput = fileInput)}
          onChange={this.fileSelectedHandler}
        />
        <button className="Pick" onClick={() => this.fileInput.click()}>
          Pick File
        </button>
        <button className="Upload" onClick={this.fileUploadHandler}>
          Upload
        </button>
      </div>
    );
  }
}

export default App;
