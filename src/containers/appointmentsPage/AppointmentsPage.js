import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";
import { ROUTES } from "../../components/root/Root";

export const AppointmentsPage = () => {
  /*
  Define state variables for 
  appointment info
  */
const [contacts , setContacts] = useState();
const [title , setTitle] = useState();
const [contact, setContact] = useState();
const [date , setDate] = useState();
const [time , setTime] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */

  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: 'row',
        backgroundColor: "blue",

      }}
    >
    <AppointmentForm />
      <hr />
      <section
        style={{
          display: 'flex',
          flexDirection: 'flexEnd',
          backgroundColor: 'green',
          flexGrow: 1,
        }}
      >
        <h2>Appointments</h2>
      </section>
    </div>
  );
};