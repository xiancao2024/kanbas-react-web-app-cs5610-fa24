import React, { useState } from "react";

export default function DateStateVariable() {
  // Declare a state variable 'startDate' and initialize it with the current date
  const [startDate, setStartDate] = useState(new Date());

  // Utility function to convert a Date object into the 'YYYY-MM-DD' format expected by the HTML date input
  const dateObjectToHtmlDateString = (date: Date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? '0' : ''}${
      date.getMonth() + 1
    }-${date.getDate() < 10 ? '0' : ''}${date.getDate()}`;
  };

  return (
    <div id="wd-date-state-variables">
      <h2>Date State Variables</h2>

      {/* Display the raw Date object */}
      <h3>Raw Date Object: {JSON.stringify(startDate)}</h3>

      {/* Display the Date object in 'YYYY-MM-DD' format */}
      <h3>Formatted Date: {dateObjectToHtmlDateString(startDate)}</h3>

      {/* HTML date input, initialized with the formatted date */}
      <input
        className="form-control"
        type="date"
        defaultValue={dateObjectToHtmlDateString(startDate)}  // Set the initial value in the 'YYYY-MM-DD' format
        onChange={(e) => setStartDate(new Date(e.target.value))}  // Update 'startDate' on date change
      />

      <hr />
    </div>
  );
}
