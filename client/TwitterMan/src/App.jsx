import React from 'react'
import Navbar from './Navbar'
function App() {
  return (
    <>
      <Navbar />
      <div className="App pt-16 pb-16 mx-5 ">
        {/** container cards */}
        <div className="box-border m-auto max-w-[75rem] 3xl:max-w-[120rem] columns-1xs sm:columns-2xs md:columns-2 lg:columns-3 xl:columns-3 2xl:columns-3 3xl:columns-5">
          {/** Card FIRST LINE */}
          <article className="mb-4 break-inside p-6 rounded-xl flex flex-col text-sm bg-white dark:bg-slate-800 dark:text-white">
            <div className="flex pb-5 items-start justify-between">
              <div className="flex">
                <a className="inline-block mr-4" href="#">
                  <img
                    className="rounded-full max-w-none w-12 h-12"
                    src="https://randomuser.me/api/portraits/men/35.jpg"
                    alt="Avatar"
                  />
                </a>
                <div className="flex flex-col">
                  <div>
                    <a className="inline-block text-base font-bold" href="#">
                      Wade Warren
                    </a>
                  </div>
                  <div className="text-slate-500 dark:text-slate-400">
                    {' '}
                    September 22, 2018{' '}
                  </div>
                </div>
              </div>
              <button className="flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700 ">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <h2 className="text-xl font-extrabold">
              {' '}
              Multiple web Design templates Selection{' '}
            </h2>

            <p className="text-sm dark:text-slate-200">
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
            </p>
            <div className="py-4">
              <a className="inline-flex items-center" href="#">
                <span className="mr-2">
                  <svg
                    className="fill-rose-600 dark:fill-rose-400"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                  </svg>
                </span>
                <span className="font-bold">34</span>
              </a>
            </div>
            <div className="relative">
              <input
                className="pt-2 pb-2 pl-3 w-full pr-20 h-10 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium"
                type="text"
                placeholder="Write a comment"
              />
              <span className="flex absolute right-3 top-2/4 -mt-3 items-center">
                <svg
                  className="fill-blue-500 dark:fill-slate-50"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                >
                  <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
                </svg>
              </span>
            </div>
            <div className="pt-6">
              <div className="flex pb-4 group">
                <a className="mr-4" href="#">
                  <img
                    className="rounded-full max-w-none w-11 h-11"
                    src="https://randomuser.me/api/portraits/women/82.jpg"
                    alt="Avatar"
                  />
                </a>
                <div className="flex-1 relative pr-10">
                  <button className="hidden absolute right-0 top-0 group-hover:flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700 ">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <div>
                    <a className="inline-block font-bold mr-2" href="#">
                      Camila Gomez
                    </a>
                    <span className="text-slate-500 dark:text-slate-300">
                      08 minutes ago
                    </span>
                  </div>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur.
                  </p>
                  <div className="mt-2 flex items-center">
                    <a className="inline-flex items-center py-2 mr-3" href="#">
                      <span className="mr-2">
                        <svg
                          className="fill-rose-600 dark:fill-rose-400"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                        </svg>
                      </span>
                      <span className="font-bold">12</span>
                    </a>
                    <button className="py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md">
                      Repply
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex pb-4 group">
                <a className="inline-block mr-4" href="#">
                  <img
                    className="rounded-full max-w-none w-11 h-11"
                    src="https://randomuser.me/api/portraits/men/16.jpg"
                    alt="Avatar"
                  />
                </a>
                <div className="flex-1 relative pr-10">
                  <button className="hidden absolute right-0 top-0 group-hover:flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700 ">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <div>
                    <a className="inline-block font-bold mr-2" href="#">
                      Xavi Jimenez
                    </a>
                    <span className="text-slate-500 dark:text-slate-300">
                      3 minutes ago
                    </span>
                  </div>
                  <p className="text-sm">
                    Dolor sit ameteiusmod consectetur adipiscing elit permiaso
                    olcanc.
                  </p>
                  <div className="mt-2 flex items-center">
                    <a className="inline-flex items-center py-2 mr-3" href="#">
                      <span className="mr-2">
                        <svg
                          className="fill-rose-600 dark:fill-rose-400"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55M16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z" />
                        </svg>
                      </span>
                      <span className="font-bold">0</span>
                    </a>
                    <button className="py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md">
                      Repply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
          {/** End Card */}
          {/** Card FIRST LINE */}
          <article className="mb-4 break-inside p-6 rounded-xl flex flex-col text-sm bg-white dark:bg-slate-800 dark:text-white">
            <div className="flex pb-6 items-start justify-between">
              <div className="flex">
                <a className="inline-block mr-4" href="#">
                  <img
                    className="rounded-full max-w-none w-12 h-12"
                    src="https://randomuser.me/api/portraits/men/35.jpg"
                    alt="Avatar"
                  />
                </a>
                <div className="flex flex-col">
                  <div>
                    <a className="inline-block text-base font-bold" href="#">
                      Wade Warren
                    </a>
                  </div>
                  <div className="text-slate-500 dark:text-slate-400">
                    {' '}
                    September 22, 2018{' '}
                  </div>
                </div>
              </div>
              <button className="flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700 ">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <h2 className="text-xl font-extrabold">
              {' '}
              Multiple web Design templates Selection{' '}
            </h2>

            <p className="text-sm dark:text-slate-200">
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
            </p>
            <div className="py-4">
              <a className="inline-flex items-center" href="#">
                <span className="mr-2">
                  <svg
                    className="fill-rose-600 dark:fill-rose-400"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                  </svg>
                </span>
                <span className="font-bold">34</span>
              </a>
            </div>
            <div className="relative">
              <input
                className="pt-2 pb-2 pl-3 w-full pr-20 h-10 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium"
                type="text"
                placeholder="Write a comment"
              />
              <span className="flex absolute right-3 top-2/4 -mt-3 items-center">
                <svg
                  className="fill-blue-500 dark:fill-slate-50"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                >
                  <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
                </svg>
              </span>
            </div>
            <div className="pt-6">
              <div className="flex pb-4 group">
                <a className="mr-4" href="#">
                  <img
                    className="rounded-full max-w-none w-11 h-11"
                    src="https://randomuser.me/api/portraits/women/82.jpg"
                    alt="Avatar"
                  />
                </a>
                <div className="flex-1 relative pr-10">
                  <button className="hidden absolute right-0 top-0 group-hover:flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700 ">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <div>
                    <a className="inline-block font-bold mr-2" href="#">
                      Camila Gomez
                    </a>
                    <span className="text-slate-500 dark:text-slate-300">
                      08 minutes ago
                    </span>
                  </div>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur.
                  </p>
                  <div className="mt-2 flex items-center">
                    <a className="inline-flex items-center py-2 mr-3" href="#">
                      <span className="mr-2">
                        <svg
                          className="fill-rose-600 dark:fill-rose-400"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                        </svg>
                      </span>
                      <span className="font-bold">12</span>
                    </a>
                    <button className="py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md">
                      Repply
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex pb-4 group">
                <a className="inline-block mr-4" href="#">
                  <img
                    className="rounded-full max-w-none w-11 h-11"
                    src="https://randomuser.me/api/portraits/men/16.jpg"
                    alt="Avatar"
                  />
                </a>
                <div className="flex-1 relative pr-10">
                  <button className="hidden absolute right-0 top-0 group-hover:flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700 ">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <div>
                    <a className="inline-block font-bold mr-2" href="#">
                      Xavi Jimenez
                    </a>
                    <span className="text-slate-500 dark:text-slate-300">
                      3 minutes ago
                    </span>
                  </div>
                  <p className="text-sm">
                    Dolor sit ameteiusmod consectetur adipiscing elit permiaso
                    olcanc.
                  </p>
                  <div className="mt-2 flex items-center">
                    <a className="inline-flex items-center py-2 mr-3" href="#">
                      <span className="mr-2">
                        <svg
                          className="fill-rose-600 dark:fill-rose-400"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55M16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z" />
                        </svg>
                      </span>
                      <span className="font-bold">0</span>
                    </a>
                    <button className="py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md">
                      Repply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
          {/** End Card */}
          {/** Card FIRST LINE */}
          <article className="mb-4 break-inside p-6 rounded-xl flex flex-col text-sm bg-white dark:bg-slate-800 dark:text-white">
            <div className="flex pb-6 items-start justify-between">
              <div className="flex">
                <a className="inline-block mr-4" href="#">
                  <img
                    className="rounded-full max-w-none w-12 h-12"
                    src="https://randomuser.me/api/portraits/men/35.jpg"
                    alt="Avatar"
                  />
                </a>
                <div className="flex flex-col">
                  <div>
                    <a className="inline-block text-base font-bold" href="#">
                      Wade Warren
                    </a>
                  </div>
                  <div className="text-slate-500 dark:text-slate-400">
                    {' '}
                    September 22, 2018{' '}
                  </div>
                </div>
              </div>
              <button className="flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700 ">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <h2 className="text-xl font-extrabold">
              {' '}
              Multiple web Design templates Selection{' '}
            </h2>

            <p className="text-sm dark:text-slate-200">
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
            </p>
            <div className="py-4">
              <a className="inline-flex items-center" href="#">
                <span className="mr-2">
                  <svg
                    className="fill-rose-600 dark:fill-rose-400"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                  </svg>
                </span>
                <span className="font-bold">34</span>
              </a>
            </div>
            <div className="relative">
              <input
                className="pt-2 pb-2 pl-3 w-full pr-20 h-10 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium"
                type="text"
                placeholder="Write a comment"
              />
              <span className="flex absolute right-3 top-2/4 -mt-3 items-center">
                <svg
                  className="fill-blue-500 dark:fill-slate-50"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                >
                  <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
                </svg>
              </span>
            </div>
            <div className="pt-6">
              <div className="flex pb-4 group">
                <a className="mr-4" href="#">
                  <img
                    className="rounded-full max-w-none w-11 h-11"
                    src="https://randomuser.me/api/portraits/women/82.jpg"
                    alt="Avatar"
                  />
                </a>
                <div className="flex-1 relative pr-10">
                  <button className="hidden absolute right-0 top-0 group-hover:flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700 ">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <div>
                    <a className="inline-block font-bold mr-2" href="#">
                      Camila Gomez
                    </a>
                    <span className="text-slate-500 dark:text-slate-300">
                      08 minutes ago
                    </span>
                  </div>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur.
                  </p>
                  <div className="mt-2 flex items-center">
                    <a className="inline-flex items-center py-2 mr-3" href="#">
                      <span className="mr-2">
                        <svg
                          className="fill-rose-600 dark:fill-rose-400"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                        </svg>
                      </span>
                      <span className="font-bold">12</span>
                    </a>
                    <button className="py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md">
                      Repply
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex pb-4 group">
                <a className="inline-block mr-4" href="#">
                  <img
                    className="rounded-full max-w-none w-11 h-11"
                    src="https://randomuser.me/api/portraits/men/16.jpg"
                    alt="Avatar"
                  />
                </a>
                <div className="flex-1 relative pr-10">
                  <button className="hidden absolute right-0 top-0 group-hover:flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700 ">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <div>
                    <a className="inline-block font-bold mr-2" href="#">
                      Xavi Jimenez
                    </a>
                    <span className="text-slate-500 dark:text-slate-300">
                      3 minutes ago
                    </span>
                  </div>
                  <p className="text-sm">
                    Dolor sit ameteiusmod consectetur adipiscing elit permiaso
                    olcanc.
                  </p>
                  <div className="mt-2 flex items-center">
                    <a className="inline-flex items-center py-2 mr-3" href="#">
                      <span className="mr-2">
                        <svg
                          className="fill-rose-600 dark:fill-rose-400"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55M16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z" />
                        </svg>
                      </span>
                      <span className="font-bold">0</span>
                    </a>
                    <button className="py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md">
                      Repply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
          {/** End Card */}
          {/** Card FIRST LINE */}
          <article className="mb-4 break-inside p-6 rounded-xl flex flex-col text-sm bg-white dark:bg-slate-800 dark:text-white">
            <div className="flex pb-6 items-start justify-between">
              <div className="flex">
                <a className="inline-block mr-4" href="#">
                  <img
                    className="rounded-full max-w-none w-12 h-12"
                    src="https://randomuser.me/api/portraits/men/35.jpg"
                    alt="Avatar"
                  />
                </a>
                <div className="flex flex-col">
                  <div>
                    <a className="inline-block text-base font-bold" href="#">
                      Wade Warren
                    </a>
                  </div>
                  <div className="text-slate-500 dark:text-slate-400">
                    {' '}
                    September 22, 2018{' '}
                  </div>
                </div>
              </div>
              <button className="flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700 ">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <h2 className="text-xl font-extrabold">
              {' '}
              Multiple web Design templates Selection{' '}
            </h2>

            <p className="text-sm dark:text-slate-200">
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
            </p>
            <div className="py-4">
              <a className="inline-flex items-center" href="#">
                <span className="mr-2">
                  <svg
                    className="fill-rose-600 dark:fill-rose-400"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                  </svg>
                </span>
                <span className="font-bold">34</span>
              </a>
            </div>
            <div className="relative">
              <input
                className="pt-2 pb-2 pl-3 w-full pr-20 h-10 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium"
                type="text"
                placeholder="Write a comment"
              />
              <span className="flex absolute right-3 top-2/4 -mt-3 items-center">
                <svg
                  className="fill-blue-500 dark:fill-slate-50"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                >
                  <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
                </svg>
              </span>
            </div>
            <div className="pt-6">
              <div className="flex pb-4 group">
                <a className="mr-4" href="#">
                  <img
                    className="rounded-full max-w-none w-11 h-11"
                    src="https://randomuser.me/api/portraits/women/82.jpg"
                    alt="Avatar"
                  />
                </a>
                <div className="flex-1 relative pr-10">
                  <button className="hidden absolute right-0 top-0 group-hover:flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700 ">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <div>
                    <a className="inline-block font-bold mr-2" href="#">
                      Camila Gomez
                    </a>
                    <span className="text-slate-500 dark:text-slate-300">
                      08 minutes ago
                    </span>
                  </div>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur.
                  </p>
                  <div className="mt-2 flex items-center">
                    <a className="inline-flex items-center py-2 mr-3" href="#">
                      <span className="mr-2">
                        <svg
                          className="fill-rose-600 dark:fill-rose-400"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                        </svg>
                      </span>
                      <span className="font-bold">12</span>
                    </a>
                    <button className="py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md">
                      Repply
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex pb-4 group">
                <a className="inline-block mr-4" href="#">
                  <img
                    className="rounded-full max-w-none w-11 h-11"
                    src="https://randomuser.me/api/portraits/men/16.jpg"
                    alt="Avatar"
                  />
                </a>
                <div className="flex-1 relative pr-10">
                  <button className="hidden absolute right-0 top-0 group-hover:flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700 ">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <div>
                    <a className="inline-block font-bold mr-2" href="#">
                      Xavi Jimenez
                    </a>
                    <span className="text-slate-500 dark:text-slate-300">
                      3 minutes ago
                    </span>
                  </div>
                  <p className="text-sm">
                    Dolor sit ameteiusmod consectetur adipiscing elit permiaso
                    olcanc.
                  </p>
                  <div className="mt-2 flex items-center">
                    <a className="inline-flex items-center py-2 mr-3" href="#">
                      <span className="mr-2">
                        <svg
                          className="fill-rose-600 dark:fill-rose-400"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55M16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z" />
                        </svg>
                      </span>
                      <span className="font-bold">0</span>
                    </a>
                    <button className="py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md">
                      Repply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
          {/** End Card */}
        </div>
      </div>
    </>
  )
}

export default App

//
// {/** card */}
// <div className='break-inside rounded-xl mb-4 p-6 bg-white dark:bg-slate-800 dark:text-white'>card</div>
//
