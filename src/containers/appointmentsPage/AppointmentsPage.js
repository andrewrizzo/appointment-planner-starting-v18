import React, { useState } from "react";
import WeeklyOverview from "../../components/Weekly overview/Weeklyoverview";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";
import { ROUTES } from "../../components/root/Root";
import Calender from "../../components/Calendar/Calender";
import './apt.css'
export const AppointmentsPage = () => {
  /*
  Define state variables for 
  appointment info
  */
  const [contacts, setContacts] = useState();
  const [title, setTitle] = useState();
  const [contact, setContact] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */

  };

  return (
    <div className="a1"
      style={{
        // display: "flex",
        // flexDirection: 'row',
        // backgroundColor: "blue",
      }}
    >
      {/* <AppointmentForm /> */}

      <div className="a2">

       

        <Calender />
        <WeeklyOverview />
      </div>

    </div>
  );
};
