import React from "react";
import useFirestore from "../hooks/useFirestore";
import "../App.css";

const ImageGrid = () => {
  //variable for images from firebase
  const { docs } = useFirestore("images");
  console.log(docs);
  //validating docs are there; if so mapping through and using data to render
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <div className="img-wrap" key={doc.id}>
            <img src={doc.url} alt="uploaded pic" />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
