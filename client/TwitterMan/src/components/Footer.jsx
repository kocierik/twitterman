import React from 'react'
import twitterman from '../assets/twitterman.png'

const Footer = () => {
  return (
    <footer className="p-4 flex flex-col bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a className="flex items-center mb-4 sm:mb-0">
          <img src={twitterman} alt="Twitterman logo" className="mr-3 h-8" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            TwitterMan
          </span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"> */}
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{' '}
        <a href="/" className="hover:underline">
          TwitterMan™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  )
}

export default Footer
