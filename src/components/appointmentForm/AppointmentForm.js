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
  const [v, setV] = useState();

  return (

    <>
      <form
        style={{
          display: "flex",
          flexDirection: 'column',
          backgroundColor: "lightblue",
          height: 900,
          width: 400,
          fontSize: 'large',
          color: "white",
        }}
     >
        <div
          style={{
            display: "flex",
            justifyContent: 'flex-end',
            height: 90,
            backgroundColor: '#064789',

          }}

        >
          <label>
            Participant name:
            <input // name of Person
              style={{
                height: 100,
                marginLeft: 40,
                width: 145,
                backgroundColor: "transparent",
                border: "none",
                color: 'white',
                
              }}
              type="text"
              name="name of person "
              placeholder="Name"

            />
          </label>
        </div>
        <div
          style={{
            display: "flex",
            height: 90,
            justifyContent: 'flex-end',
            backgroundColor: "#427AA1",
            alignItems: 'center',
          }}

        >
          <label>

           Meeting date:
          </label>
          <input // date
            style={{
              height: 100,
              marginLeft: 40,
              width: 145,
              backgroundColor: "transparent",
              border: "none",
              color: 'white',
            }}
            type="date"
            id="date"
          />
        </div>
        <div
          style={{
            display: "flex",
            height: 90,
            justifyContent: "flex-end",
            backgroundColor: "#064789",
          }}
        >
          <label>
             Meeting time:
            <input // time
              style={{
                height: 100,
                marginLeft: 40,
                width: 145,
                backgroundColor: "transparent",
                border: "none",
                color: 'white',
              }}
              type="time" id="date"
            />
          </label>
        </div>
        <div
          style={{
            display: "flex",
            height: 90,
            justifyContent: "flex-end",
            backgroundColor: "#427AA1",
          }}

        >
          <label>
           Meeting location:
            <input // Address
              style={{
                height: 100,
                marginLeft: 40,
                width: 145,
                backgroundColor: "transparent",
                border: "none",
                color: 'white',
              }}
              type="address"
              id="address"
              placeholder="address"
            />
          </label>
        </div>
        <div
          style={{
            display: "flex",
            height: 90,
            justifyContent: "flex-end",
            backgroundColor: "#064789",
          }}
        >
          <label>
              Meeting host:
            <input // host aka Who are you meeting with?
              style={{
                height: 90,
                marginLeft: 40,
                width: 145,
                backgroundColor: "transparent",
                border: "none",
                color: 'white',
              }}
              type="text"
              id="host"
              placeholder="host"
            />
          </label>
        </div>
         <button
         style={{
          height: 70,
          backgroundColor: "#59C9A5",
          border: "none",
         color: "white",
        }}
         
         > Submit
         </button>
      </form>
    </>


  );
};
