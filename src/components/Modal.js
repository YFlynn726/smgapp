import React from "react";

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    //check to see where user clicks before setting state back to null only if back class is included
    if (e.target.classList.contains("back")) {
      setSelectedImg(null);
    }
  };
  return (
    <div className="back" onClick={handleClick}>
      <img src={selectedImg} alt="enlargedPic" />
      <a href={selectedImg} target="_blank" rel="noopener noreferrer">
        <h2 className="shortUrl">{selectedImg}</h2>
      </a>
    </div>
  );
};

export default Modal;
