import React, { useState, useEffect } from "react";
import "./main.css";
const Time = (props) => {
    const [time, setTime] = useState(new Date().toLocaleTimeString([], {hour12: false}));
    const [date, setDate] = useState(new Date().toLocaleDateString());
    

  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  const getMonthIndex = (txt) => {
    const month = txt.toLowerCase();
    return months.indexOf(month) + 1;
  };

  const updateDateTime = () => {
    const dateTimeObj = String(new Date()).split(" ");
    const day = dateTimeObj[2];
    const month = getMonthIndex(dateTimeObj[1]);
    const year = dateTimeObj[3];
    const formattedDate = `${day}/${month}/${year}`;
    setDate(formattedDate);
    setTime(dateTimeObj[4]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateDateTime();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (str) => {
    const timeArr = str.split(":");
    let hour = parseInt(timeArr[0]) % 12;
    hour = hour === 0 ? 12 : hour;
    const minute = timeArr[1];
    const second = timeArr[2];
    const ampm = parseInt(timeArr[0]) >= 12 ? " PM" : " AM";
    return `${hour}:${minute}:${second}${ampm}`;
  };

  const handleClick = () => {
    props.toggleVisibility();
  };

  return (
    <div className="info">
      <div className="infowrap">
        <div className="time">{formatTime(time)}</div>
        <div className="date">{date}</div>
      </div>
      <i className="fa fa-power-off fa-2x shutdown info-icon" onClick={props.click}></i>
    </div>
  );
};

export default Time;
