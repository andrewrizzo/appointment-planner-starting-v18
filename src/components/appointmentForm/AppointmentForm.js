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
      className="form"
        style={{
          display: "flex",
          flexDirection: 'column',
          backgroundColor: "blue",
          height: 900,
          width: 400,
        }}
      >
        <div
        style={{
        display: "flex",
        justifyContent: 'flex-end',
          height: 90,
          backgroundColor: 'red',
      
      }}
        
        >
          <label>
            what is your your name:
            <input // name of Person
              style={{
                height: 100,
              marginLeft: 40,
             width: 145,
            }}
              
              type="text"
              name="name of person "
            />
          </label>
        </div>
        <div
        style={{
          display: "flex", 
          height: 90,
          justifyContent: 'flex-end',
          backgroundColor: "green",
        }}
        
        >
          <label>
            
            What date is the meeting:
          </label>
          <input // date
             style={{
              height: 100,
            marginLeft: 40,
            width: 145,
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
         backgroundColor: "yellow",
      }}
        >
          <label>
            What time is the meeting:
            <input // time
               style={{
                height: 100,
              marginLeft: 40,
              width: 145,
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
         backgroundColor: " lightblue",
        }}
        
        >
          <label>
            Where are you meeting:
            <input // Address
               style={{
                height: 100,
              marginLeft: 40,
              width: 145
              ,
            }}
              type="address"
              id="address"
              placeholder="addess"
            />
          </label>
        </div>
        <div
        style={{
         display: "flex",
          height:  90,
         justifyContent: "flex-end",
         backgroundColor: "brown",
        }}
        >
          <label>
            you lending the meeting:
            <input // host aka Who are you meeting with?
              style={{
                height: 100,
              marginLeft: 40,
             width: 145,
            }} 
              type="text"
              id="host"
            />
          </label>
        </div>

      </form>
    </>


  );
};
