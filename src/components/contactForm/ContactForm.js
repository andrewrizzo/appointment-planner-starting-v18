import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <>
        <form className="form">
          <div className="d1">
            <label>
              Perison Name:
              <input className="input" // name of Person

                type="text"
                name="name of person "
                placeholder="Name"

              />
            </label>
          </div>
          <div className="d4">
            <label>
              Phone Number
              <input // Phone Number

                type="tel"
                id="phone"
                placeholder="Number"
              />
            </label>
          </div>

          <button className="button"> Submit
          </button>
        </form>
      </>


    </>
  );
};
export default ContactForm;
