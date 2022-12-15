import React from 'react'
import { useState } from 'react'

const Setting = ({ settingInfoDesk }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex p-5 self-end ml-5">
      <div className="ml-3 relative">
        <div>
          <button
            id="dropdownButton"
            onClick={() => setIsOpen(!isOpen)}
            data-dropdown-toggle="dropdown"
            className="inline-block flex flex-1 flex-end text-gray-500  flex-col justify-end focus:outline-none focus:ring-gray-100  rounded-lg text-sm"
            type="button"
          >
            <span className="sr-only">Open dropdown</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
            </svg>
          </button>
        </div>
        {isOpen && (
          <div
            data-aos="zoom-in"
            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
            tabIndex={-1}
          >
            {settingInfoDesk?.map((item, i) => {
              if (item.show)
                return (
                  <span
                    key={i}
                    className="block border-b border-gray-100 px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-0"
                  >
                    <button
                      className="flex flex-1"
                      onClick={() => {
                        item.setting()
                        setIsOpen(!isOpen)
                      }}
                    >
                      {item.name}
                    </button>
                  </span>
                )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default Setting
