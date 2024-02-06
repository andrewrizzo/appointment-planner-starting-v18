import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";
import { ROUTES } from "../../components/root/Root";
import Calender from "../../components/Calendar/Calender";
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
    {/* <AppointmentForm /> */}
      <hr />
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: ' hsl(90, 10%, 95%)',
          flexGrow: 1,
          
        }}
      >
        <Calender />
      
      </section>
    </div>
  );
};