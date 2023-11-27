import React, { useState } from "react";
import "./Modal.css"
import Modal from 'react-modal';

const CustomModal = ({ isOpen, closeModal, data }) => {

return (
  <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <button onClick={closeModal}>Close Modal</button>
    </Modal>
  );
};

export default CustomModal;
