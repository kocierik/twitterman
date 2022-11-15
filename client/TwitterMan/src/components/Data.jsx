import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './format-style.css'

function DataRangePicker() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div id="dateRangePickerId">
      <div date-rangepicker class="flex items-center">
        <div class="relative">
        <DatePicker
          selected={startDate}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          onChange={date => setStartDate(date)}    
          className="custom-input"
        />
      </div>

      <span class="mx-4 text-gray-500">to</span>
      <div class="relative">
        <DatePicker
          selected={endDate}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          onChange={date => setEndDate(date)}
          className="custom-input"
        />
      </div>
    </div>
  </div>
  );
}
export default DataRangePicker;