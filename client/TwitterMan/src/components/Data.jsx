import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './format-style.css'

function DataRangePicker(props) {
  return (
    <div id="dateRangePickerId flex flex-1 rounded">
      <div className=" rounded flex-shrink-0 z-10 inline-flex w-full items-center text-sm font-medium text-gray-900 focus:outline-none text-white ">
        <div className="relative">
          <DatePicker
            selected={props.startDate}
            onChange={(date) => {
              props.setStartDate(date)
            }}
            filterDate={(date) => {
              return new Date() > date
            }}
            className="rounded w-100 h-30 cursor-pointer m-1 bg-gray-800	p-1.5 text-center	"
          />
          <div className="flex absolute inset-y-0   items-center pl-5 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>

        <span className="ml-2 text-white">to</span>
        <div className="relative">
          <DatePicker
            selected={props.endDate}
            onChange={(date) => {
              props.setEndDate(date)
            }}
            filterDate={(date) => {
              return new Date() > date
            }}
            className=" rounded w-120 h-30 cursor-pointer m-2 bg-gray-800	p-1.5 text-center"
          />
          <div className="flex absolute inset-y-0  left-1 items-center pl-5 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DataRangePicker
