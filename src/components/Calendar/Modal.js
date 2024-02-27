import React, { useState } from "react";
import "./Modal.css";
import AppointmentForm from "../appointmentForm/AppointmentForm";
export default function Modal(props) {
  const toggleModal = () => {
    props.setModalVisible(!props.modalVisible);
  };

  if(props.modalVisible) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  // console.log({props})

  return (
    <>
      {props.modalVisible && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <AppointmentForm />
            
          </div>
        </div>
      )}
        </>
  );
}