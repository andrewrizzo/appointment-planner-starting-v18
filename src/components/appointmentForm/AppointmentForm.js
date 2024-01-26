import React, { useState } from "react";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
const [  v, setV] =useState();
 
return (
    <>
   <form>
    <input 
    type="text"
    name=" "
    />
    <input // name of Person
    type="text" name="name of person "
    
    />
    <input // date
    type="date" id="date"
    
    />
    <input // time
    type="time" id="date"
    
    />
    <input // Address
    type="address" id="address"
    
    />
    <input // host aka Who are you meeting with?
    type="text" id="host"
    
    
    />
    
    
    Address
    
    </form> 
    </>
  );
};
