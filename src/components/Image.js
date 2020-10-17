import React from "react";
import useFirestore from "../hooks/useFirestore";
import "../App.css";
import Linkify from "react-linkify";

const ImageGrid = () => {
  const { docs } = useFirestore("images");
  console.log(docs);
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <Linkify key={doc.id}>
            <div className="img-wrap" key={doc.id}>
              <img src={doc.url} alt="uploaded pic" />
            </div>
          </Linkify>
        ))}
    </div>
  );
};

export default ImageGrid;