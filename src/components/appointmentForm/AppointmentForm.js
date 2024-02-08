import React, { useState, useEffect } from "react";
import "./AppointmentForm.css"

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

  // const [color3, setColor3] = useState('rgb(80 132 205)');
  // useEffect(() => { window.styles.setColor3 = setColor3; }, [setColor3]);
  // const [color4, setColor4] = useState('rgb(127 125 166 / 30%)');
  // useEffect(() => { window.styles.setColor4 = setColor4; }, [setColor4]);
  // const [color5, setColor5] = useState('rgb(80 132 205)');
  // useEffect(() => { window.styles.setColor5 = setColor5; }, [setColor5]);
  // const [color6, setColor6] = useState(' rgb(127 125 166 / 30%)');
  // useEffect(() => { window.styles.setColor6 = setColor6; }, [setColor6]);
  // const [color7, setColor7] = useState('rgb(80 132 205)');
  // useEffect(() => { window.styles.setColor7 = setColor7; }, [setColor7]);
  // const [color8, setColor8] = useState('transparent');
  // useEffect(() => { window.styles.setColor8 = setColor8; }, [setColor8]);
  // const [color9, setColor9] = useState('rgb(221 124 141)');
  // useEffect(() => { window.styles.setColor9 = setColor9; }, [setColor9]);
  // const [color10, setColor10] = useState('lightblue');
  // useEffect(() => { window.styles.setColor10 = setColor10; }, [setColor10]);
  // const [color11, setColor11] = useState('white');
  // useEffect(() => { window.styles.setColor11 = setColor11; }, [setColor11]);
  // const [color12, setColor12] = useState('white');
  // useEffect(() => { window.styles.setColor12 = setColor12; }, [setColor12]);

  return (

    <>
      <form className="form">
        <div className="d1">
          <label>
            Participant name:
            <input className="input" // name of Person

              type="text"
              name="name of person "
              placeholder="Name"
              // style={{
              //   backgroundColor: color3,
              // }}
            />
          </label>
        </div>
        <div className="d2">
          <label>

            Meeting date:
          </label>
          <input  // date

            type="date"
            id="date"
          />
        </div>
        <div className="d3">
          <label>
            Meeting time:
            <input // time

              type="time" id="date"
            />
          </label>
        </div>
        <div className="d4">
          <label>
            Meeting location:
            <input // Address

              type="address"
              id="address"
              placeholder="address"
            />
          </label>
        </div>
        <div className="d5" >
          <label>
            Meeting host:
            <input // host aka Who are you meeting with?

              type="text"
              id="host"
              placeholder="host"
            />
          </label>
        </div>
        <button className="button"> Submit
        </button>
      </form>
    </>

  );
};
export default AppointmentForm;