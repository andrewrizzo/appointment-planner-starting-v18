import React, { useState, useEffect } from "react";
 import ContactForm from "../../components/contactForm/ContactForm";
export const ContactsFromPage = () => {
    /*
    Define state variables for 
    contact info and duplicate check
    */
  
    const handleSubmit = (e) => {
      e.preventDefault();
      /*
      Add contact info and clear data
      if the contact name is not a duplicate
      */
    };
    
    /*
    Using hooks, check for contact name in the 
    contacts array variable in props
    */
  
    return (
      <div>
        <ContactForm/>
      </div>
    );
  };