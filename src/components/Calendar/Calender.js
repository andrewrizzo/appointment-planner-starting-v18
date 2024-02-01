import React, { useEffect } from "react";
import dayjs from "dayjs";
const Calender = () => {
    useEffect(() =>{
    console.log(dayjs().startOf('week'));
    },[]);
    return (
        <div 
        style={{
            backgroundColor: "lightblue",
            width: "100%",
            height: '100%',
        }}
        >
        {[''].map(day => 
        <div className="day"> 
        <p>jan 1</p> 
        <div
        style={{
            backgroundColor: "navy",
        }}
        >
        <p> Hang out with chris</p>
        <p>2443 sw cameo blrvd</p>
        </div>
        </div>)}
        </div>
    );
}
export default Calender;