import React, { useState } from "react";
import "./Modal.css"

const Modal = ({ isOpen, onclose }) => {
  const handleClose = () => {
    onclose();
  };


return (
  <div className={`modal ${isOpen ? "block" : "hidden"}`}>
    <div className="modal-overlay" onClick={handleClose}></div>
    <div className="modal-container">
      <div className="modal-content">
        <button className="modal-close" onClick={handleClose}>
          X
        </button>
        <div className="modal-body">
          <p>This is the modal content.</p>
        </div>
      </div>
    </div>
  </div>
);
};

export default Modal;
