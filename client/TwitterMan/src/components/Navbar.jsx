import { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import ProfileDropDown from './home/ProfileDropDown'
import { Link, useLocation } from 'react-router-dom'
import twitterman from '../assets/twitterman.png'
import { useEffect } from 'react'
import * as Const from '../utils'

const navigation = [
  { name: 'Dashboard', href: '#', current: true, link: '/' },
  { name: 'Eredita', href: '/eredita', current: false, link: '/eredita' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const history = useLocation()
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    Const.checkIfLogged(setIsLogged)
  }, [isLogged])

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div
            data-aos="zoom-in"
            data-aos-duration="700"
            className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"
          >
            <div className="relative items-center flex h-16 items-center justify-between">
              <div className="absolute  inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center  sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  {/* <img
                    className="block h-8 w-auto lg:hidden"
                    src={twitterman}
                    alt="Twitterman logo"
                  /> */}
                  <Link to="/">
                    <img
                      className="hidden h-10 w-auto lg:block"
                      src={twitterman}
                      alt="Twitterman logo"
                    />{' '}
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item, i) => (
                      <Link
                        to={item.link}
                        key={i}
                        className="hover:-translate-y-1 hover:scale-105 duration-300"
                      >
                        <span
                          style={{
                            backgroundColor:
                              history.pathname == item.link ? 'indigo' : '',
                          }}
                          className=" text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium active"
                        >
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {!isLogged && (
                <Link to="/login">
                  <button
                    type="button"
                    className=" hover:-translate-y-1 hover:scale-105 duration-300 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-1.5 text-center mr-2 "
                  >
                    Sign in
                  </button>
                </Link>
              )}
              {isLogged && (
                <Link to="/profile">
                  <button
                    type="button"
                    className=" hover:-translate-y-1 hover:scale-105 duration-300 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-1.5 text-center mr-2 "
                  >
                    Profile
                  </button>
                </Link>
              )}
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item, i) => (
                <Link to={item.link} key={i}>
                  <Disclosure.Button
                    key={item.name}
                    as="div"
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium '
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
