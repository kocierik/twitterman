import React from 'react'

function App() {
  return (
    <div className="App pt-16 pb-16 mx-5 ">
      {/** container cards */}
      <div className="box-border m-auto max-w-[75rem] 3xl:max-w-[120rem] columns-1xs sm:columns-2xs md:columns-2 lg:columns-3 xl:columns-3 2xl:columns-3 3xl:columns-5">
        {/** Card */}
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
          <div className="py-4">
            <div className="flex justify-between gap-1 mb-1">
              <a className="flex" href="#">
                <img
                  className="max-w-full rounded-tl-lg"
                  src="https://images.pexels.com/photos/92866/pexels-photo-92866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Imagen"
                />
              </a>
              <a className="flex" href="#">
                <img
                  className="max-w-full"
                  src="https://images.pexels.com/photos/247929/pexels-photo-247929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Imagen"
                />
              </a>
              <a className="flex" href="#">
                <img
                  className="max-w-full rounded-tr-lg"
                  src="https://images.pexels.com/photos/631522/pexels-photo-631522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Imagen"
                />
              </a>
            </div>
            <div className="flex justify-between gap-1">
              <a className="flex" href="#">
                <img
                  className="max-w-full rounded-bl-lg"
                  src="https://images.pexels.com/photos/1429748/pexels-photo-1429748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Imagen"
                />
              </a>
              <a className="flex" href="#">
                <img
                  className="max-w-full rounded-br-lg"
                  src="https://images.pexels.com/photos/69020/pexels-photo-69020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Imagen"
                />
              </a>
            </div>
          </div>
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
              <svg className="mr-2" width="22" height="22" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"
                />
              </svg>
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
            <div className="w-full">
              <a
                href="#"
                className="py-3 px-4 w-full block bg-slate-100 dark:bg-slate-700 text-center rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition ease-in-out delay-75"
              >
                Show more comments
              </a>
            </div>
          </div>
        </article>

        {/** Card */}
        <article className="mb-4 break-inside p-6 rounded-xl flex flex-col text-sm bg-white dark:bg-slate-800 dark:text-white">
          <div className="flex pb-6 items-center justify-between">
            <div className="flex">
              <a className="inline-block mr-4" href="#">
                <img
                  className="rounded-full max-w-none w-12 h-12"
                  src="https://randomuser.me/api/portraits/women/9.jpg"
                  alt="Avatar"
                />
              </a>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <a className="inline-block text-base font-bold mr-2" href="#">
                    Esther Howard
                  </a>
                  <span>
                    <svg
                      className="fill-blue-500 dark:fill-slate-50"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                    </svg>
                  </span>
                </div>
                <div className="text-slate-500 dark:text-slate-300">
                  {' '}
                  January 22, 2021{' '}
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-xl font-extrabold">
            {' '}
            Multiple web Design templates Selection{' '}
          </h2>
          <div className="py-4">
            <a className="flex" href="#">
              <img
                className="max-w-full rounded-lg"
                src="https://images.pexels.com/photos/3682153/pexels-photo-3682153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Imagen"
              />
            </a>
          </div>
          <p className="text-sm">
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
              <span className="font-bold">68</span>
            </a>
          </div>
          <div className="relative">
            <input
              className="pt-2 pb-2 pl-3 w-full pr-20 h-10 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium"
              type="text"
              placeholder="Write a comment"
            />
            <span className="flex absolute right-3 top-2/4 -mt-3 items-center">
              <svg className="mr-2" width="22" height="22" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"
                />
              </svg>
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
                  src="https://randomuser.me/api/portraits/men/84.jpg"
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
                    Felippe Diogo
                  </a>
                  <span className="text-slate-500 dark:text-slate-300">
                    1 minut ago
                  </span>
                </div>
                <p className="text-sm">
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                  eiusmod 😀😀😀{' '}
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
                    <span className="font-bold">2</span>
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
                  src="https://randomuser.me/api/portraits/women/74.jpg"
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
                    Jessica
                  </a>
                  <span className="text-slate-500 dark:text-slate-300">
                    3 minutes ago
                  </span>
                </div>
                <p className="text-sm">
                  Dolor sit ameteiusmod consectetur adipiscing elit.
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
                    <span className="font-bold">2</span>
                  </a>
                  <button className="py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md">
                    Repply
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full">
              <a
                href="#"
                className="py-3 px-4 w-full block bg-slate-100 dark:bg-slate-700 text-center rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition ease-in-out delay-75"
              >
                Show more comments
              </a>
            </div>
          </div>
        </article>

        {/** Card */}
        <article className="flex flex-col bg-clip-border mb-4 break-inside p-6 rounded-xl text-sm bg-white dark:bg-slate-800 dark:text-white">
          <div className="flex pb-6 items-center justify-between">
            <div className="flex">
              <a className="inline-block mr-4" href="#">
                <img
                  className="rounded-full max-w-none w-12 h-12"
                  src="https://randomuser.me/api/portraits/men/33.jpg"
                  alt="Avatar"
                />
              </a>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <a className="inline-block text-base font-bold mr-2" href="#">
                    Leonard Palenko
                  </a>
                </div>
                <div className="text-slate-500 dark:text-slate-300">
                  {' '}
                  Medical Assistant{' '}
                </div>
              </div>
            </div>
          </div>
          <div className="py-4">
            <div className="flex justify-between gap-1 mb-1">
              <a className="flex" href="#">
                <img
                  className="max-w-full rounded-l-lg"
                  src="https://images.pexels.com/photos/2128028/pexels-photo-2128028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Imagen"
                />
              </a>
              <a className="flex" href="#">
                <img
                  className="max-w-full rounded-r-lg"
                  src="https://images.pexels.com/photos/6145852/pexels-photo-6145852.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Imagen"
                />
              </a>
            </div>
          </div>
          <h2 className="text-xl font-extrabold">
            {' '}
            Multiple web Design templates Selection{' '}
          </h2>
          <div className="py-4">
            <p className="text-sm">
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
            </p>
          </div>
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
              <span className="font-bold">15</span>
            </a>
          </div>
          <div className="relative">
            <input
              className="pt-2 pb-2 pl-3 w-full pr-20 h-10 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium"
              type="text"
              placeholder="Write a comment"
            />
            <span className="flex absolute right-3 top-2/4 -mt-3 items-center">
              <svg className="mr-2" width="22" height="22" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"
                />
              </svg>
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
        </article>

        {/** Card */}
        <article className="mb-4 break-inside p-6 rounded-xl text-sm flex flex-col bg-clip-border bg-white dark:bg-slate-800 dark:text-white">
          <div className="flex pb-6 items-center justify-between">
            <div className="flex">
              <a className="inline-block mr-4" href="#">
                <img
                  className="rounded-full max-w-none w-12 h-12"
                  src="https://randomuser.me/api/portraits/men/9.jpg"
                  alt="Avatar"
                />
              </a>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <a className="text-base font-bold mr-2" href="#">
                    Eduardo
                  </a>
                  <span className="text-slate-500 dark:text-slate-300">
                    25 minutes ago
                  </span>
                </div>
                <div className="text-slate-500 dark:text-slate-300">
                  {' '}
                  General Electric{' '}
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-xl font-extrabold">
            {' '}
            Multiple web Design templates Selection{' '}
          </h2>
          <div className="py-4">
            <p>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
            </p>
          </div>
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
              <svg className="mr-2" width="22" height="22" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"
                />
              </svg>
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
                  src="https://randomuser.me/api/portraits/men/54.jpg"
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
                    Shawn
                  </a>
                  <span className="text-slate-500 dark:text-slate-300">
                    2 days ago
                  </span>
                </div>
                <p className="text-sm">
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                  eiusmod.{' '}
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
                    <span className="font-bold">2</span>
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
                  src="https://randomuser.me/api/portraits/women/54.jpg"
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
                    Dianne Russell
                  </a>
                  <span className="text-slate-500 dark:text-slate-300">
                    3 minutes ago
                  </span>
                </div>
                <p className="text-sm">
                  {' '}
                  Dolor sit ameteiusmod Dolor sit ameteiusmod 🐸consectetur
                  adipiscing elitconsecte.{' '}
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
                    <span className="font-bold">2</span>
                  </a>
                  <button className="py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md">
                    Repply
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full">
              <a
                href="#"
                className="py-3 px-4 w-full block bg-slate-100 dark:bg-slate-700 text-center rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition ease-in-out delay-75"
              >
                Show more comments
              </a>
            </div>
          </div>
        </article>

        {/** Card */}
        <article className="mb-4 break-inside p-6 rounded-xl flex flex-col bg-clip-border text-sm bg-white dark:bg-slate-800 dark:text-white">
          <div className="flex pb-6 items-center justify-between">
            <div className="flex">
              <a className="inline-block mr-4" href="#">
                <img
                  className="rounded-full max-w-none w-12 h-12"
                  src="https://randomuser.me/api/portraits/women/43.jpg"
                  alt="Avatar"
                />
              </a>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <a className="text-base font-bold mr-2" href="#">
                    Anna Bernal
                  </a>
                  <span className="text-slate-500 dark:text-slate-300">
                    Johnson & Johnson
                  </span>
                </div>
                <div className="text-slate-500 dark:text-slate-300">
                  {' '}
                  General Electric{' '}
                </div>
              </div>
            </div>
          </div>
          <div className="my-4 flex gap-1">
            <div className="flex flex-col gap-1 flex-1">
              <a className="flex h-2/4" href="#">
                <img
                  className="w-full h-full rounded-tl-lg object-cover"
                  src="https://images.pexels.com/photos/327331/pexels-photo-327331.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Imagen"
                />
              </a>
              <a className="flex h-2/4" href="#">
                <img
                  className="w-full rounded-bl-lg object-cover"
                  src="https://images.pexels.com/photos/92866/pexels-photo-92866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Imagen"
                />
              </a>
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <a className="flex h-full" href="#">
                <img
                  className="w-full rounded-tr-lg rounded-br-lg object-cover"
                  src="https://images.pexels.com/photos/247931/pexels-photo-247931.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Imagen"
                />
              </a>
            </div>
          </div>
          <h2 className="text-xl font-extrabold">
            {' '}
            Multiple web Design templates Selection{' '}
          </h2>
          <div className="py-4">
            <p className="text-sm">
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
            </p>
          </div>
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
              <svg className="mr-2" width="22" height="22" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"
                />
              </svg>
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
                  src="https://randomuser.me/api/portraits/women/23.jpg"
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
                    Kristinne
                  </a>
                  <span className="text-slate-500 dark:text-slate-300">
                    2 days ago
                  </span>
                </div>
                <p className="text-sm">
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                  eiusmod.{' '}
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
                    <span className="font-bold">2</span>
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
                  src="https://randomuser.me/api/portraits/women/59.jpg"
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
                    Eleanor Pena
                  </a>
                  <span className="text-slate-500 dark:text-slate-300">
                    3 minutes ago
                  </span>
                </div>
                <p>
                  {' '}
                  Dolor sit ameteiusmod Dolor sit ameteiusmod
                  😍😍✌🤪consectetur adipiscing elitconsectetur adipiscing
                  elit.{' '}
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
                    <span className="font-bold">2</span>
                  </a>
                  <button className="py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md">
                    Repply
                  </button>
                </div>
                <div className="mt-4">
                  <div className="flex pb-4">
                    <a className="mr-4" href="#">
                      <img
                        className="rounded-full max-w-none w-10 h-10"
                        src="https://randomuser.me/api/portraits/men/23.jpg"
                        alt="Avatar"
                      />
                    </a>
                    <div className="flex-1 relative pr-10">
                      <button className="absolute right-0 top-0 flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700 ">
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
                          Joseph
                        </a>
                        <span className="text-slate-500 dark:text-slate-300">
                          Just now
                        </span>
                      </div>
                      <p className="text-sm">
                        Dolor sit ate iusmod con sectetur.
                      </p>
                      <div className="mt-2 flex items-center">
                        <a
                          className="inline-flex items-center py-2 mr-3"
                          href="#"
                        >
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
                          <span className="font-bold">8</span>
                        </a>
                        <button className="py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md">
                          Repply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <a
                href="#"
                className="py-3 px-4 w-full block bg-slate-100 dark:bg-slate-700 text-center rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition ease-in-out delay-75"
              >
                Show more comments
              </a>
            </div>
          </div>
        </article>

        {/** Card */}
        <article className="mb-4 break-inside p-6 rounded-xl flex flex-col bg-clip-border text-sm bg-white dark:bg-slate-800 dark:text-white">
          <div className="flex pb-6 items-center justify-between">
            <div className="flex">
              <a className="inline-block mr-4" href="#">
                <img
                  className="rounded-full max-w-none w-12 h-12"
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Avatar"
                />
              </a>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <a className="text-base font-bold mr-2" href="#">
                    Savannah Nguyen
                  </a>
                </div>
                <div className="text-slate-500 dark:text-slate-300">
                  {' '}
                  January 22, 2021{' '}
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-xl font-extrabold">
            {' '}
            Multiple web Design templates Selection{' '}
          </h2>
          <div className="py-4">
            <p className="text-sm">
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
            </p>
          </div>
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
              <span className="font-bold">15</span>
            </a>
          </div>
          <div className="relative">
            <input
              className="pt-2 pb-2 pl-3 w-full pr-20 h-10 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium"
              type="text"
              placeholder="Write a comment"
            />
            <span className="flex absolute right-3 top-2/4 -mt-3 items-center">
              <svg className="mr-2" width="22" height="22" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"
                />
              </svg>
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
        </article>

        {/** Card */}
        <article className="mb-4 break-inside rounded-xl flex flex-col bg-clip-border text-sm bg-white dark:bg-slate-800 dark:text-white">
          <div className="flex p-6 items-center justify-between">
            <div className="flex">
              <a className="inline-block mr-4" href="#">
                <img
                  className="rounded-full max-w-none w-12 h-12"
                  src="https://randomuser.me/api/portraits/women/47.jpg"
                  alt="Avatar"
                />
              </a>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <a className="text-base font-bold mr-2" href="#">
                    Annette Black
                  </a>
                  <span className="text-slate-500 dark:text-slate-300">
                    3 minutes ago
                  </span>
                </div>
                <div className="text-slate-500 dark:text-slate-300">
                  Medical Assistant
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 bg-violet-500">
            <h2 className="text-2xl font-extrabold text-white">
              Multiple web Design templates Selection
            </h2>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-center">
              <a className="inline-flex items-center" href="#">
                <span className="-m-1 rounded-full border-2 border-white dark:border-slate-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fill="url(#a12)"
                      d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Z"
                    />
                    <path
                      fill="#fff"
                      d="M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725.1.163.132.36.089.546-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666ZM3.6 7h.8a.6.6 0 0 1 .6.6v3.8a.6.6 0 0 1-.6.6h-.8a.6.6 0 0 1-.6-.6V7.6a.6.6 0 0 1 .6-.6Z"
                    />
                    <defs>
                      <linearGradient
                        id="a12"
                        x1="8"
                        x2="8"
                        y2="16"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#18AFFF" />
                        <stop offset="1" stopColor="#0062DF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="-m-1 rounded-full border-2 border-white dark:border-slate-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fill="url(#b1231)"
                      d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Z"
                    />
                    <path
                      fill="#fff"
                      d="M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41Z"
                    />
                    <defs>
                      <linearGradient
                        id="b1231"
                        x1="8"
                        x2="8"
                        y2="16"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FF6680" />
                        <stop offset="1" stopColor="#E61739" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="-m-1 rounded-full border-2 border-white dark:border-slate-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fill="url(#aa)"
                      d="M16 8A8 8 0 1 1-.001 8 8 8 0 0 1 16 8"
                    />
                    <path
                      fill="url(#bb)"
                      d="M3 8.008C3 10.023 4.006 14 8 14c3.993 0 5-3.977 5-5.992C13 7.849 11.39 7 8 7c-3.39 0-5 .849-5 1.008Z"
                    />
                    <path
                      fill="url(#cc)"
                      d="M4.541 12.5c.804.995 1.907 1.5 3.469 1.5 1.563 0 2.655-.505 3.459-1.5-.551-.588-1.599-1.5-3.459-1.5s-2.917.912-3.469 1.5Z"
                    />
                    <path
                      fill="#2A3755"
                      d="M6.213 4.144c.263.188.502.455.41.788-.071.254-.194.369-.422.37-.78.012-1.708.256-2.506.613-.065.029-.197.088-.332.085-.124-.003-.251-.058-.327-.237-.067-.157-.073-.388.276-.598.545-.33 1.257-.48 1.909-.604-.41-.303-.85-.56-1.315-.768-.427-.194-.38-.457-.323-.6.127-.317.609-.196 1.078.026a9 9 0 0 1 1.552.925Zm3.577 0a8.955 8.955 0 0 1 1.55-.925c.47-.222.95-.343 1.078-.026.057.143.104.406-.323.6a7.028 7.028 0 0 0-1.313.768c.65.123 1.363.274 1.907.604.349.21.342.44.276.598-.077.18-.203.234-.327.237-.135.003-.267-.056-.332-.085-.797-.357-1.725-.6-2.504-.612-.228-.002-.351-.117-.422-.37-.091-.333.147-.6.41-.788v-.001Z"
                    />
                    <defs>
                      <linearGradient
                        id="aa"
                        x1="8"
                        x2="8"
                        y1="1.64"
                        y2="16"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FEEA70" />
                        <stop offset="1" stopColor="#F69B30" />
                      </linearGradient>
                      <linearGradient
                        id="bb"
                        x1="8"
                        x2="8"
                        y1="7"
                        y2="14"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#472315" />
                        <stop offset="1" stopColor="#8B3A0E" />
                      </linearGradient>
                      <linearGradient
                        id="cc"
                        x1="8.005"
                        x2="8.005"
                        y1="11"
                        y2="13.457"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FC607C" />
                        <stop offset="1" stopColor="#D91F3A" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="font-bold ml-3">33</span>
              </a>
              <a className="ml-auto" href="#">
                23 comentarios
              </a>
            </div>
            <div className="mt-6 mb-6 h-px bg-slate-200 dark:bg-slate-700" />
            <div className="flex items-center justify-between mb-6">
              <button className="py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md">
                {' '}
                Me gusta{' '}
              </button>
              <button className="py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md">
                {' '}
                Comentar{' '}
              </button>
              <button className="py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md">
                {' '}
                Compartir{' '}
              </button>
            </div>
            <div className="relative">
              <input
                className="pt-2 pb-2 pl-3 w-full pr-20 h-10 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium"
                type="text"
                placeholder="Write a comment"
              />
              <span className="flex absolute right-3 top-2/4 -mt-3 items-center">
                <svg
                  className="mr-2"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"
                  />
                </svg>
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
          </div>
        </article>
        {/** End Card */}

        {/** Card */}
        <article className="mb-4 break-inside rounded-xl flex flex-col bg-clip-border text-sm bg-white dark:bg-slate-800 dark:text-white">
          <div className="flex p-6 items-center justify-between">
            <div className="flex">
              <a className="inline-block mr-4" href="#">
                <img
                  className="rounded-full max-w-none w-12 h-12"
                  src="https://randomuser.me/api/portraits/women/33.jpg"
                  alt="Avatar"
                />
              </a>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <a className="text-base font-bold mr-2" href="#">
                    Cameron Williamson
                  </a>
                  <span>
                    <svg
                      className="fill-blue-500 dark:fill-slate-50 w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" />
                    </svg>
                  </span>
                </div>
                <div className="text-slate-500 dark:text-slate-300">
                  {' '}
                  Software Development Manager{' '}
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm pr-6 pl-6 pb-6">
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
          </p>
          <div className="p-6 bg-gradient-to-r from-cyan-500 to-blue-500">
            <h2 className="text-3xl text-white font-extrabold">
              {' '}
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod.{' '}
            </h2>
          </div>
          <div className="p-6">
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
              <span className="font-bold">68</span>
            </a>
          </div>
          <div className="px-6">
            <div className="relative">
              <input
                className="pt-2 pb-2 pl-3 w-full pr-20 h-10 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium"
                type="text"
                placeholder="Write a comment"
              />
              <span className="flex absolute right-3 top-2/4 -mt-3 items-center">
                <svg
                  className="mr-2"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"
                  />
                </svg>
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
          </div>
          <div className="p-6">
            <div className="flex pb-4 group">
              <a className="mr-4" href="#">
                <img
                  className="rounded-full max-w-none w-11 h-11"
                  src="https://randomuser.me/api/portraits/women/83.jpg"
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
                    Kristin Watson
                  </a>
                  <span className="text-slate-500 dark:text-slate-300">
                    25 minutes ago
                  </span>
                </div>
                <p className="text-sm">
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit seddo{' '}
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
            <div className="flex pb-4 group">
              <a className="inline-block mr-4" href="#">
                <img
                  className="rounded-full max-w-none w-11 h-11"
                  src="https://randomuser.me/api/portraits/women/74.jpg"
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
                    Melvin D. Goodman
                  </a>
                  <span className="text-slate-500 dark:text-slate-300">
                    3 minutes ago
                  </span>
                </div>
                <p className="text-sm">
                  Dolor sit ameteiusmod consectetur adipiscing elit.
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
                    <span className="font-bold">23</span>
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
                  src="https://randomuser.me/api/portraits/men/7.jpg"
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
                    Erik Moore
                  </a>
                  <span className="text-slate-500 dark:text-slate-300">
                    3 minutes ago
                  </span>
                </div>
                <p className="text-sm">
                  Dolor sit ameteiusmod consectetur adipiscing elit per toni
                  casmus.
                </p>
                <div className="py-4">
                  <a className="flex" href="#">
                    <img
                      className="max-w-full rounded-lg"
                      src="https://images.pexels.com/photos/61381/pexels-photo-61381.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      alt="Imagen"
                    />
                  </a>
                </div>
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
                    <span className="font-bold">23</span>
                  </a>
                  <button className="py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md">
                    Repply
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full">
              <a
                href="#"
                className="py-3 px-4 w-full block bg-slate-100 dark:bg-slate-700 text-center rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition ease-in-out delay-75"
              >
                Show more comments
              </a>
            </div>
          </div>
        </article>

        {/** Card */}
        <article className="mb-4 break-inside rounded-xl flex flex-col bg-clip-border text-sm bg-white dark:bg-slate-800 dark:text-white">
          <div className="flex p-6 items-center justify-between">
            <div className="flex">
              <a className="inline-block mr-4" href="#">
                <img
                  className="rounded-full max-w-none w-12 h-12"
                  src="https://randomuser.me/api/portraits/women/67.jpg"
                  alt="Avatar"
                />
              </a>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <a className="text-base font-bold mr-2" href="#">
                    Marylin Betancourt
                  </a>
                  <span className="text-slate-500 dark:text-slate-300">
                    3 minutes ago
                  </span>
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-300">
                  Marketing Coordinator
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm pr-6 pl-6 pb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmodelit sed do eiusmodelit sed do eiusmodelit
            <a
              href="#"
              className="font-medium text-blue-700 dark:text-blue-500"
            >
              {' '}
              #ui{' '}
            </a>
            <a
              href="#"
              className="font-medium text-blue-700 dark:text-blue-500"
            >
              {' '}
              #uxui{' '}
            </a>
            <a
              href="#"
              className="font-medium text-blue-700 dark:text-blue-500"
            >
              {' '}
              #userinterface{' '}
            </a>
            <a
              href="#"
              className="font-medium text-blue-700 dark:text-blue-500"
            >
              {' '}
              #webdeveloper{' '}
            </a>
            <a
              href="#"
              className="font-medium text-blue-700 dark:text-blue-500"
            >
              {' '}
              #card{' '}
            </a>
          </p>
          <div className="p-6 bg-yellow-500">
            <h2 className="text-3xl font-extrabold text-black">
              {' '}
              Multiple web Design templates Selection{' '}
            </h2>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-center">
              <a className="inline-flex items-center" href="#">
                <span className="-m-1 rounded-full border-2 border-white dark:border-slate-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fill="url(#a)"
                      d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Z"
                    />
                    <path
                      fill="#fff"
                      d="M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725.1.163.132.36.089.546-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666ZM3.6 7h.8a.6.6 0 0 1 .6.6v3.8a.6.6 0 0 1-.6.6h-.8a.6.6 0 0 1-.6-.6V7.6a.6.6 0 0 1 .6-.6Z"
                    />
                    <defs>
                      <linearGradient
                        id="a"
                        x1="8"
                        x2="8"
                        y2="16"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#18AFFF" />
                        <stop offset="1" stopColor="#0062DF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="-m-1 rounded-full border-2 border-white dark:border-slate-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fill="url(#b)"
                      d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Z"
                    />
                    <path
                      fill="#fff"
                      d="M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41Z"
                    />
                    <defs>
                      <linearGradient
                        id="b"
                        x1="8"
                        x2="8"
                        y2="16"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FF6680" />
                        <stop offset="1" stopColor="#E61739" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="-m-1 rounded-full border-2 border-white dark:border-slate-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fill="url(#aa)"
                      d="M16 8A8 8 0 1 1-.001 8 8 8 0 0 1 16 8"
                    />
                    <path
                      fill="url(#bb)"
                      d="M3 8.008C3 10.023 4.006 14 8 14c3.993 0 5-3.977 5-5.992C13 7.849 11.39 7 8 7c-3.39 0-5 .849-5 1.008Z"
                    />
                    <path
                      fill="url(#cc)"
                      d="M4.541 12.5c.804.995 1.907 1.5 3.469 1.5 1.563 0 2.655-.505 3.459-1.5-.551-.588-1.599-1.5-3.459-1.5s-2.917.912-3.469 1.5Z"
                    />
                    <path
                      fill="#2A3755"
                      d="M6.213 4.144c.263.188.502.455.41.788-.071.254-.194.369-.422.37-.78.012-1.708.256-2.506.613-.065.029-.197.088-.332.085-.124-.003-.251-.058-.327-.237-.067-.157-.073-.388.276-.598.545-.33 1.257-.48 1.909-.604-.41-.303-.85-.56-1.315-.768-.427-.194-.38-.457-.323-.6.127-.317.609-.196 1.078.026a9 9 0 0 1 1.552.925Zm3.577 0a8.955 8.955 0 0 1 1.55-.925c.47-.222.95-.343 1.078-.026.057.143.104.406-.323.6a7.028 7.028 0 0 0-1.313.768c.65.123 1.363.274 1.907.604.349.21.342.44.276.598-.077.18-.203.234-.327.237-.135.003-.267-.056-.332-.085-.797-.357-1.725-.6-2.504-.612-.228-.002-.351-.117-.422-.37-.091-.333.147-.6.41-.788v-.001Z"
                    />
                    <defs>
                      <linearGradient
                        id="aa"
                        x1="8"
                        x2="8"
                        y1="1.64"
                        y2="16"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FEEA70" />
                        <stop offset="1" stopColor="#F69B30" />
                      </linearGradient>
                      <linearGradient
                        id="bb"
                        x1="8"
                        x2="8"
                        y1="7"
                        y2="14"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#472315" />
                        <stop offset="1" stopColor="#8B3A0E" />
                      </linearGradient>
                      <linearGradient
                        id="cc"
                        x1="8.005"
                        x2="8.005"
                        y1="11"
                        y2="13.457"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FC607C" />
                        <stop offset="1" stopColor="#D91F3A" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="-m-1 rounded-full border-2 border-white dark:border-slate-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="none"
                    viewBox="0 0 16 16"
                  >
                    <g clipPath="url(#a21)">
                      <path
                        fill="url(#b21)"
                        d="M16 8A8 8 0 1 1-.001 8 8 8 0 0 1 16 8"
                      />
                      <path
                        fill="url(#c21)"
                        d="M5.643 10.888C5.485 12.733 6.37 14 8 14c1.63 0 2.515-1.267 2.357-3.112C10.2 9.042 9.242 8 8 8c-1.242 0-2.2 1.042-2.357 2.888Z"
                      />
                      <path
                        fill="url(#d21)"
                        d="M3.5 5.5c0-.828.559-1.5 1.25-1.5S6 4.672 6 5.5C6 6.329 5.441 7 4.75 7S3.5 6.329 3.5 5.5Zm6.5 0c0-.828.56-1.5 1.25-1.5.691 0 1.25.672 1.25 1.5 0 .829-.559 1.5-1.25 1.5C10.56 7 10 6.329 10 5.5Z"
                      />
                      <path
                        fill="#000"
                        d="M3.5 5.5c0-.828.559-1.5 1.25-1.5S6 4.672 6 5.5C6 6.329 5.441 7 4.75 7S3.5 6.329 3.5 5.5Zm6.5 0c0-.828.56-1.5 1.25-1.5.691 0 1.25.672 1.25 1.5 0 .829-.559 1.5-1.25 1.5C10.56 7 10 6.329 10 5.5Z"
                        filter="url(#e21)"
                      />
                      <path
                        fill="#4E506A"
                        d="M4.481 4.567c.186.042.29.252.232.47-.057.217-.254.36-.44.317-.186-.042-.29-.252-.232-.47.057-.216.254-.36.44-.317Zm6.659.063c.205.047.321.28.258.52-.064.243-.282.4-.49.354-.205-.046-.322-.28-.258-.52.063-.243.282-.4.49-.354Z"
                      />
                      <path
                        fill="#000"
                        d="M11.068 1.696c.052-.005.104-.007.157-.007.487 0 .99.204 1.372.562a.368.368 0 0 1-.087.594.344.344 0 0 1-.387-.06c-.275-.26-.656-.4-.992-.37a.8.8 0 0 0-.59.332.346.346 0 0 1-.49.068.368.368 0 0 1-.068-.507 1.49 1.49 0 0 1 1.085-.612Zm-7.665.555c.371-.353.86-.553 1.372-.562a1.49 1.49 0 0 1 1.242.619.369.369 0 0 1-.066.507.347.347 0 0 1-.492-.068.8.8 0 0 0-.59-.331c-.335-.031-.717.11-.992.369a.344.344 0 0 1-.496-.024.368.368 0 0 1 .022-.51Z"
                        filter="url(#f21)"
                      />
                      <path
                        fill="url(#g21)"
                        d="M11.068 1.696c.052-.005.104-.007.157-.007.487 0 .99.204 1.372.562a.368.368 0 0 1-.087.594.344.344 0 0 1-.387-.06c-.275-.26-.656-.4-.992-.37a.8.8 0 0 0-.59.332.346.346 0 0 1-.49.068.368.368 0 0 1-.068-.507 1.49 1.49 0 0 1 1.085-.612Zm-7.665.555c.371-.353.86-.553 1.372-.562a1.49 1.49 0 0 1 1.242.619.369.369 0 0 1-.066.507.347.347 0 0 1-.492-.068.8.8 0 0 0-.59-.331c-.335-.031-.717.11-.992.369a.344.344 0 0 1-.496-.024.368.368 0 0 1 .022-.51Z"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="b21"
                        x1="8"
                        x2="8"
                        y1="1.64"
                        y2="16"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FEEA70" />
                        <stop offset="1" stopColor="#F69B30" />
                      </linearGradient>
                      <linearGradient
                        id="c21"
                        x1="8"
                        x2="8"
                        y1="8"
                        y2="14"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#472315" />
                        <stop offset="1" stopColor="#8B3A0E" />
                      </linearGradient>
                      <linearGradient
                        id="d21"
                        x1="8"
                        x2="8"
                        y1="4"
                        y2="7"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#191A33" />
                        <stop offset=".872" stopColor="#3B426A" />
                      </linearGradient>
                      <linearGradient
                        id="g21"
                        x1="8"
                        x2="8"
                        y1="1.688"
                        y2="2.888"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#E78E0D" />
                        <stop offset="1" stopColor="#CB6000" />
                      </linearGradient>
                      <filter
                        id="e21"
                        width="9"
                        height="3"
                        x="3.5"
                        y="4"
                        colorInterpolationFilters="sRGB"
                        filterUnits="userSpaceOnUse"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation=".5" />
                        <feComposite
                          in2="hardAlpha"
                          k2="-1"
                          k3="1"
                          operator="arithmetic"
                        />
                        <feColorMatrix values="0 0 0 0 0.0980392 0 0 0 0 0.101961 0 0 0 0 0.2 0 0 0 0.819684 0" />
                        <feBlend in2="shape" result="effect1_innerShadow" />
                      </filter>
                      <filter
                        id="f21"
                        width="15.422"
                        height="7.199"
                        x=".289"
                        y="-.312"
                        colorInterpolationFilters="sRGB"
                        filterUnits="userSpaceOnUse"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="1.5" />
                        <feColorMatrix values="0 0 0 0 0.803922 0 0 0 0 0.388235 0 0 0 0 0.00392157 0 0 0 0.145679 0" />
                        <feBlend
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow"
                        />
                        <feBlend
                          in="SourceGraphic"
                          in2="effect1_dropShadow"
                          result="shape"
                        />
                      </filter>
                      <clipPath id="a21">
                        <path fill="#fff" d="M0 0h16v16H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span className="font-bold ml-3">85</span>
              </a>
              <a className="ml-auto" href="#">
                23 comentarios
              </a>
            </div>
            <div className="mt-6 mb-6 h-px bg-slate-200 dark:bg-slate-700" />
            <div className="flex items-center justify-between mb-6">
              <button className="py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md">
                Me gusta
              </button>
              <button className="py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md">
                Comentar
              </button>
              <button className="py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md">
                Compartir
              </button>
            </div>
            <div className="relative">
              <input
                className="pt-2 pb-2 pl-3 w-full pr-20 h-10 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium"
                type="text"
                placeholder="Write a comment"
              />
              <span className="flex absolute right-3 top-2/4 -mt-3 items-center">
                <svg
                  className="mr-2"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"
                  />
                </svg>
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
          </div>
        </article>
        {/** End Card */}

        {/** Card */}
        <article className="mb-4 break-inside p-6 rounded-xl flex flex-col text-sm group bg-white dark:bg-slate-800 dark:text-white">
          <div className="flex pb-6 items-center justify-between">
            <div className="flex">
              <a className="inline-block mr-4" href="#">
                <img
                  className="rounded-full max-w-none w-12 h-12"
                  src="https://randomuser.me/api/portraits/men/39.jpg"
                  alt="Avatar"
                />
              </a>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <a className="text-base font-bold mr-2" href="#">
                    Alexander Mitrovic
                  </a>
                  <span>
                    <svg
                      className="fill-blue-500 dark:fill-slate-50"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                    </svg>
                  </span>
                </div>
                <div className="text-slate-500 dark:text-slate-300">
                  {' '}
                  January 22, 2021{' '}
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-xl font-extrabold">
            {' '}
            Multiple web Design templates Selection{' '}
          </h2>
          <div className="my-4 relative overflow-hidden rounded-xl flex flex-col justify-between text-white bg-green-900 min-h-[14rem]">
            <img
              src="https://images.pexels.com/photos/313791/pexels-photo-313791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Imagen"
            />
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="flex justify-between h-full flex-col">
                <div className="flex justify-end space-x-2 p-6 bg-gradient-to-t from-[#00000000] to-[#000000]">
                  <button className="flex items-center justify-center text-white rounded-full p-2 transition-all group-hover:bg-white group-hover:text-black">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <button className="flex items-center justify-center text-white rounded-full p-2 transition-all group-hover:bg-white group-hover:text-black">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55M16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
                <div className="p-6 bg-gradient-to-t from-[#000000] to-[#00000000]">
                  <div className="flex items-center flex-row justify-between">
                    <div className="flex items-center space-x-4">
                      <img
                        className="flex-none w-10 h-10 rounded-full object-cover"
                        src="https://randomuser.me/api/portraits/men/35.jpg"
                        alt="avatar"
                      />
                      <div className="flex-auto">
                        <a href="#" className="no-underline font-bold block">
                          Frank Esteban
                        </a>
                      </div>
                    </div>
                    <button className="flex items-center justify-center text-white rounded-full p-2 transition-all group-hover:bg-white group-hover:text-black">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 12H4V17H20V12H22V17C22 18.11 21.11 19 20 19H4C2.9 19 2 18.11 2 17V12M12 15L17.55 9.54L16.13 8.13L13 11.25V2H11V11.25L7.88 8.13L6.46 9.55L12 15Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm">
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
              <span className="font-bold">68</span>
            </a>
          </div>
          <div className="relative">
            <input
              className="pt-2 pb-2 pl-3 w-full pr-20 h-10 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium"
              type="text"
              placeholder="Write a comment"
            />
            <span className="flex absolute right-3 top-2/4 -mt-3 items-center">
              <svg className="mr-2" width="22" height="22" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"
                />
              </svg>
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
                  src="https://randomuser.me/api/portraits/men/83.jpg"
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
                    Ronald Richards
                  </a>
                  <span className="text-slate-500 dark:text-slate-300">
                    25 minutes ago
                  </span>
                </div>
                <p className="text-sm">
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                  eiusmod 😀😀😀{' '}
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
                    <span className="font-bold">2</span>
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
                  src="https://randomuser.me/api/portraits/women/74.jpg"
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
                    Natalia Jímenez
                  </a>
                  <span className="text-slate-500 dark:text-slate-300">
                    3 minutes ago
                  </span>
                </div>
                <p className="text-sm">
                  Dolor sit ameteiusmod consectetur adipiscing elit.
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
                    <span className="font-bold">2</span>
                  </a>
                  <button className="py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md">
                    Repply
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full">
              <a
                href="#"
                className="py-3 px-4 w-full block bg-slate-100 dark:bg-slate-700 text-center rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition ease-in-out delay-75"
              >
                Show more comments
              </a>
            </div>
          </div>
        </article>

        {/** Card */}
        <article className="mb-4 pb-6 break-inside rounded-xl flex flex-col bg-clip-border text-sm bg-white dark:bg-slate-800 dark:text-white">
          <div className="flex p-6 items-center justify-between border-b border-b-slate-200 dark:border-b-slate-700">
            <div className="flex items-center">
              <a className="inline-block mr-4" href="#">
                <img
                  className="rounded-full max-w-none w-10 h-10"
                  src="https://randomuser.me/api/portraits/men/67.jpg"
                  alt="Avatar"
                />
              </a>
              <div className="flex items-center text-base">
                <a className="inline-block font-bold mr-2" href="#">
                  Frank Smichel
                </a>
                <div className="flex items-center space-x-2">
                  <span>Shared</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      width="18"
                      height="18"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 space-y-6">
            <div className="rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="flex p-6 items-center justify-between">
                <div className="flex">
                  <a className="inline-block mr-4" href="#">
                    <img
                      className="rounded-full max-w-none w-12 h-12"
                      src="https://randomuser.me/api/portraits/women/68.jpg"
                      alt="Avatar"
                    />
                  </a>
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <a className="text-base font-bold mr-2" href="#">
                        Paula Lopez
                      </a>
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-300">
                      Marketing Coordinator
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm pr-6 pl-6 pb-6">
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmodelit sed do eiusmodelit sed do eiusmodelit{' '}
              </p>
              <a href="/">
                <img
                  src="https://images.pexels.com/photos/78793/automotive-defect-broken-car-wreck-78793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  className="max-w-full object-cover"
                  alt="Imagen"
                />
              </a>
              <p className="flex items-start p-4 space-x-2 text-slate-400 dark:text-slate-500">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  className="flex-none"
                >
                  <path
                    fill="currentColor"
                    d="M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10C4,8.89 4.89,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"
                  />
                </svg>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                  eiusmodelit
                </span>
              </p>
            </div>
          </div>
          <div className="px-6">
            <div className="flex justify-between items-center">
              <a className="inline-flex items-center" href="#">
                <span className="-m-1 rounded-full border-2 border-white dark:border-slate-800">
                  <img
                    className="w-5"
                    src="https://cdn.iconscout.com/icon/free/png-256/like-2387659-1991059.png"
                  />
                </span>
                <span className="-m-1 rounded-full border-2 border-white dark:border-slate-800">
                  <img
                    className="w-5"
                    src="https://cdn.iconscout.com/icon/free/png-256/wow-2387663-1991062.png"
                  />
                </span>
                <span className="text-base font-bold ml-3">171</span>
              </a>
              <a className="ml-auto" href="#">
                44 comentarios
              </a>
            </div>
            <div className="mt-6 mb-6 h-px bg-slate-200 dark:bg-slate-700" />
            <div className="flex items-center justify-between mb-6">
              <button className="py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md">
                Me gusta
              </button>
              <button className="py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md">
                Comentar
              </button>
              <button className="py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md">
                Compartir
              </button>
            </div>
            <div className="relative">
              <input
                className="pt-2 pb-2 pl-3 w-full pr-20 h-10 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium"
                type="text"
                placeholder="Write a comment"
              />
              <span className="flex absolute right-3 top-2/4 -mt-3 items-center">
                <svg
                  className="mr-2"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"
                  />
                </svg>
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
          </div>
        </article>
        {/** End Card */}

        {/** Card */}
        <article className="mb-4 break-inside p-6 rounded-xl flex flex-col text-sm bg-white dark:bg-slate-800 dark:text-white">
          <div className="flex pb-6 items-start justify-between">
            <div className="flex">
              <a className="inline-block mr-4" href="#">
                <img
                  className="rounded-full max-w-none w-12 h-12"
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Avatar"
                />
              </a>
              <div className="flex flex-col">
                <div>
                  <a className="inline-block text-base font-bold" href="#">
                    Thomas Frank
                  </a>
                </div>
                <div className="flex items-center text-slate-500 dark:text-slate-400 space-x-2">
                  <span>September 22, 2018 </span>
                  <div className="flex items-center space-x-1">
                    <span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <span className="mt-1">03:15 </span>
                  </div>
                </div>
              </div>
            </div>
            <button className="flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700 ">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <h2 className="text-xl font-extrabold">
            {' '}
            Multiple Multiple web Design templates Selection{' '}
          </h2>
          <div className="relative overflow-hidden rounded-xl my-4 flex flex-col justify-between text-white bg-green-900 min-h-[14rem]">
            <img
              src="https://images.pexels.com/photos/13007364/pexels-photo-13007364.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Imagen"
              className="object-cover w-full h-[20rem]"
            />
            <div className="absolute bottom-0 left-0 w-full p-6 bg-[#000000a8]">
              <div className="flex items-center flex-row justify-between">
                <div className="flex flex-col mr-auto">
                  <span>Artist</span>
                  <a
                    href="https://www.pexels.com/es-es/@anna-panchenko-212558913/"
                    className="font-medium text-xl"
                  >
                    Anna Panchenko
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm dark:text-slate-200">
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
          </p>
          <div className="flex justify-between items-center py-6">
            <a className="inline-flex items-center" href="#">
              <span className="-m-1 rounded-full border-2 border-white dark:border-slate-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path fill="url(#a)" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Z" />
                  <path
                    fill="#fff"
                    d="M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725.1.163.132.36.089.546-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666ZM3.6 7h.8a.6.6 0 0 1 .6.6v3.8a.6.6 0 0 1-.6.6h-.8a.6.6 0 0 1-.6-.6V7.6a.6.6 0 0 1 .6-.6Z"
                  />
                  <defs>
                    <linearGradient
                      id="a"
                      x1="8"
                      x2="8"
                      y2="16"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#18AFFF" />
                      <stop offset="1" stopColor="#0062DF" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="-m-1 rounded-full border-2 border-white dark:border-slate-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path fill="url(#b)" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Z" />
                  <path
                    fill="#fff"
                    d="M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41Z"
                  />
                  <defs>
                    <linearGradient
                      id="b"
                      x1="8"
                      x2="8"
                      y2="16"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FF6680" />
                      <stop offset="1" stopColor="#E61739" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="-m-1 rounded-full border-2 border-white dark:border-slate-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fill="url(#aa)"
                    d="M16 8A8 8 0 1 1-.001 8 8 8 0 0 1 16 8"
                  />
                  <path
                    fill="url(#bb)"
                    d="M3 8.008C3 10.023 4.006 14 8 14c3.993 0 5-3.977 5-5.992C13 7.849 11.39 7 8 7c-3.39 0-5 .849-5 1.008Z"
                  />
                  <path
                    fill="url(#cc)"
                    d="M4.541 12.5c.804.995 1.907 1.5 3.469 1.5 1.563 0 2.655-.505 3.459-1.5-.551-.588-1.599-1.5-3.459-1.5s-2.917.912-3.469 1.5Z"
                  />
                  <path
                    fill="#2A3755"
                    d="M6.213 4.144c.263.188.502.455.41.788-.071.254-.194.369-.422.37-.78.012-1.708.256-2.506.613-.065.029-.197.088-.332.085-.124-.003-.251-.058-.327-.237-.067-.157-.073-.388.276-.598.545-.33 1.257-.48 1.909-.604-.41-.303-.85-.56-1.315-.768-.427-.194-.38-.457-.323-.6.127-.317.609-.196 1.078.026a9 9 0 0 1 1.552.925Zm3.577 0a8.955 8.955 0 0 1 1.55-.925c.47-.222.95-.343 1.078-.026.057.143.104.406-.323.6a7.028 7.028 0 0 0-1.313.768c.65.123 1.363.274 1.907.604.349.21.342.44.276.598-.077.18-.203.234-.327.237-.135.003-.267-.056-.332-.085-.797-.357-1.725-.6-2.504-.612-.228-.002-.351-.117-.422-.37-.091-.333.147-.6.41-.788v-.001Z"
                  />
                  <defs>
                    <linearGradient
                      id="aa"
                      x1="8"
                      x2="8"
                      y1="1.64"
                      y2="16"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FEEA70" />
                      <stop offset="1" stopColor="#F69B30" />
                    </linearGradient>
                    <linearGradient
                      id="bb"
                      x1="8"
                      x2="8"
                      y1="7"
                      y2="14"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#472315" />
                      <stop offset="1" stopColor="#8B3A0E" />
                    </linearGradient>
                    <linearGradient
                      id="cc"
                      x1="8.005"
                      x2="8.005"
                      y1="11"
                      y2="13.457"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FC607C" />
                      <stop offset="1" stopColor="#D91F3A" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="font-bold ml-3">162</span>
            </a>
            <a className="ml-auto" href="#">
              18 comments
            </a>
          </div>
          <div className="relative">
            <input
              className="pt-2 pb-2 pl-3 w-full pr-20 h-10 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium"
              type="text"
              placeholder="Write a comment"
            />
            <span className="flex absolute right-3 top-2/4 -mt-3 items-center">
              <svg className="mr-2" width="22" height="22" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"
                />
              </svg>
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
                  src="https://randomuser.me/api/portraits/men/82.jpg"
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
                    Leslie Alexander
                  </a>
                  <span className="text-slate-500 dark:text-slate-300">
                    25 minutes ago
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
                  src="https://randomuser.me/api/portraits/women/76.jpg"
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
                    Tina Mills
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
            <div className="w-full">
              <a
                href="#"
                className="py-3 px-4 w-full block bg-slate-100 dark:bg-slate-700 text-center rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition ease-in-out delay-75"
              >
                Show more comments
              </a>
            </div>
          </div>
        </article>

        {/** Card */}
        <article className="mb-4 break-inside rounded-xl flex flex-col bg-clip-border text-sm py-6 space-y-6 bg-white dark:bg-slate-800 dark:text-white">
          <div className="flex px-6 items-center justify-between">
            <div className="flex">
              <a className="inline-block mr-4" href="#">
                <img
                  className="rounded-full max-w-none w-12 h-12"
                  src="https://randomuser.me/api/portraits/women/13.jpg"
                  alt="Avatar"
                />
              </a>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <a className="text-base font-bold mr-2" href="#">
                    Esthel Maria
                  </a>
                  <span className="text-slate-500 dark:text-slate-300">
                    2 weeks ago
                  </span>
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-300">
                  {' '}
                  Photography expert{' '}
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 space-y-4">
            <h4 className="mb-2 text-xl font-extrabold leading-snug">
              International exhibition of free photography
            </h4>
            <span className="text-slate-500 dark:text-slate-400">
              September 23, 2021
            </span>
            <p>
              Minim dolor in amet nulla laboris enim dolore consequat proident
              fugiat culpa eiusmod.
            </p>
            <div className="flex flex-row space-x-1">
              <span className="px-2 text-sm py-1 rounded-md bg-green-600 text-white">
                Photography
              </span>
              <span className="px-2 text-sm py-1 rounded-md bg-green-600 text-white">
                Art
              </span>
              <span className="px-2 text-sm py-1 rounded-md bg-green-600 text-white">
                Colors
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-1 text-white">
            <div className="flex space-x-1">
              <div className="flex-1 relative">
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#000000] to-[#00000000]">
                  <div className="flex items-center flex-row justify-between">
                    <div className="mr-auto">
                      <h3 className="text-lg font-medium">
                        Card overlay caption
                      </h3>
                      <p>Alternative caption</p>
                    </div>
                    <button className="flex items-center justify-center hover:bg-[#ffffff27] rounded-full p-2 transition-all">
                      <svg
                        width="26"
                        height="26"
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
                </div>
                <img
                  src="https://images.pexels.com/photos/1289669/pexels-photo-1289669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="object-cover w-full h-full"
                  alt="Imagen"
                />
              </div>
            </div>
            <div className="flex space-x-1">
              <a href="#" className="flex-1">
                <img
                  src="https://images.pexels.com/photos/1206967/pexels-photo-1206967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="object-cover w-full h-full"
                  alt="Imagen"
                />
              </a>
              <a href="#" className="flex-1">
                <img
                  src="https://images.pexels.com/photos/1309102/pexels-photo-1309102.jpeg?cs=srgb&dl=pexels-steve-johnson-1309102.jpg&fm=jpg"
                  className="object-cover w-full h-full"
                  alt="Imagen"
                />
              </a>
            </div>
          </div>
          <div className="px-6">
            <div className="flex justify-between items-center">
              <a className="inline-flex items-center" href="#">
                <span className="-m-1 rounded-full border-2 border-white dark:border-slate-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fill="url(#a)"
                      d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Z"
                    />
                    <path
                      fill="#fff"
                      d="M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725.1.163.132.36.089.546-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666ZM3.6 7h.8a.6.6 0 0 1 .6.6v3.8a.6.6 0 0 1-.6.6h-.8a.6.6 0 0 1-.6-.6V7.6a.6.6 0 0 1 .6-.6Z"
                    />
                    <defs>
                      <linearGradient
                        id="a"
                        x1="8"
                        x2="8"
                        y2="16"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#18AFFF" />
                        <stop offset="1" stopColor="#0062DF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="-m-1 rounded-full border-2 border-white dark:border-slate-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fill="url(#b)"
                      d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Z"
                    />
                    <path
                      fill="#fff"
                      d="M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41Z"
                    />
                    <defs>
                      <linearGradient
                        id="b"
                        x1="8"
                        x2="8"
                        y2="16"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FF6680" />
                        <stop offset="1" stopColor="#E61739" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="-m-1 rounded-full border-2 border-white dark:border-slate-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fill="url(#aa)"
                      d="M16 8A8 8 0 1 1-.001 8 8 8 0 0 1 16 8"
                    />
                    <path
                      fill="url(#bb)"
                      d="M3 8.008C3 10.023 4.006 14 8 14c3.993 0 5-3.977 5-5.992C13 7.849 11.39 7 8 7c-3.39 0-5 .849-5 1.008Z"
                    />
                    <path
                      fill="url(#cc)"
                      d="M4.541 12.5c.804.995 1.907 1.5 3.469 1.5 1.563 0 2.655-.505 3.459-1.5-.551-.588-1.599-1.5-3.459-1.5s-2.917.912-3.469 1.5Z"
                    />
                    <path
                      fill="#2A3755"
                      d="M6.213 4.144c.263.188.502.455.41.788-.071.254-.194.369-.422.37-.78.012-1.708.256-2.506.613-.065.029-.197.088-.332.085-.124-.003-.251-.058-.327-.237-.067-.157-.073-.388.276-.598.545-.33 1.257-.48 1.909-.604-.41-.303-.85-.56-1.315-.768-.427-.194-.38-.457-.323-.6.127-.317.609-.196 1.078.026a9 9 0 0 1 1.552.925Zm3.577 0a8.955 8.955 0 0 1 1.55-.925c.47-.222.95-.343 1.078-.026.057.143.104.406-.323.6a7.028 7.028 0 0 0-1.313.768c.65.123 1.363.274 1.907.604.349.21.342.44.276.598-.077.18-.203.234-.327.237-.135.003-.267-.056-.332-.085-.797-.357-1.725-.6-2.504-.612-.228-.002-.351-.117-.422-.37-.091-.333.147-.6.41-.788v-.001Z"
                    />
                    <defs>
                      <linearGradient
                        id="aa"
                        x1="8"
                        x2="8"
                        y1="1.64"
                        y2="16"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FEEA70" />
                        <stop offset="1" stopColor="#F69B30" />
                      </linearGradient>
                      <linearGradient
                        id="bb"
                        x1="8"
                        x2="8"
                        y1="7"
                        y2="14"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#472315" />
                        <stop offset="1" stopColor="#8B3A0E" />
                      </linearGradient>
                      <linearGradient
                        id="cc"
                        x1="8.005"
                        x2="8.005"
                        y1="11"
                        y2="13.457"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FC607C" />
                        <stop offset="1" stopColor="#D91F3A" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="font-bold ml-3">121</span>
              </a>
              <a className="ml-auto" href="#">
                23 comentarios
              </a>
            </div>
            <div className="mt-6 mb-6 h-px bg-slate-200 dark:bg-slate-700" />
            <div className="flex items-center justify-between mb-6">
              <button className="py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md">
                Me gusta
              </button>
              <button className="py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md">
                Comentar
              </button>
              <button className="py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md">
                Compartir
              </button>
            </div>
            <div className="relative">
              <input
                className="pt-2 pb-2 pl-3 w-full pr-20 h-10 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium"
                type="text"
                placeholder="Write a comment"
              />
              <span className="flex absolute right-3 top-2/4 -mt-3 items-center">
                <svg
                  className="mr-2"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"
                  />
                </svg>
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
          </div>
        </article>
        {/** End Card */}

        {/** Card */}
        <article className="mb-4 space-y-6 pb-6 break-inside rounded-xl overflow-hidden flex flex-col bg-clip-border text-sm bg-white dark:bg-slate-800 dark:text-white">
          <div className="p-6 space-y-2 bg-slate-50 dark:bg-slate-700 text-slate-500 dark:text-slate-400">
            <h5 className="font-bold text-base text-black dark:text-white">
              Congratulations
            </h5>
            <p>
              Congratulations to
              <a href="#" className="font-medium">
                {' '}
                Marina Valdez{' '}
              </a>
              and
              <a href="#" className="font-medium">
                {' '}
                Alexander Oliver{' '}
              </a>
              for celebrating a year of connection on our platform
            </p>
          </div>
          <div className="flex px-6 flex-col space-y-6 text-center">
            <div className="flex items-center justify-between">
              <a className="inline-block mr-4" href="#">
                <img
                  className="rounded-full max-w-none w-14 h-14"
                  src="https://randomuser.me/api/portraits/women/24.jpg"
                  alt="Avatar"
                />
              </a>
              <span className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-100 dark:bg-slate-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 47.5 47.5"
                  viewBox="0 0 47.5 47.5"
                  width="50"
                  height="50"
                >
                  <defs>
                    <clipPath id="a">
                      <path d="M0 38h38V0H0v38Z" />
                    </clipPath>
                  </defs>
                  <g
                    clipPath="url(#a)"
                    transform="matrix(1.25 0 0 -1.25 0 47.5)"
                  >
                    <path
                      fill="#e88a5e"
                      d="M0 0s1.132 1.65-.519 2.781c-1.649 1.131-2.78-.519-2.78-.519L-8.55-5.396c-.18.302-.379.6-.599.894l7.288 10.629s1.131 1.649-.519 2.78c-1.649 1.132-2.78-.518-2.78-.518l-6.856-9.997c-.255.209-.515.417-.785.622l7.947 11.59s1.131 1.649-.518 2.78c-1.649 1.132-2.78-.518-2.78-.518L-16.1 1.277c-.292.18-.581.335-.87.498l7.427 10.832s1.131 1.649-.519 2.78c-1.649 1.132-2.78-.518-2.78-.518l-7.854-11.453-.629-.918-.565-.825c4.948-3.393 5.419-9.779 2.592-13.902-.566-.825-1.39-.26-1.39-.26 3.393 4.949 2.356 10.51-2.593 13.903l1.462 7.302s.545 1.925-1.379 2.47c-1.924.545-2.469-1.379-2.469-1.379l-1.685-5.004c-.668-1.984-1.379-3.961-2.32-5.83-2.657-5.28-1.07-11.843 3.941-15.279 5.465-3.747 12.935-2.355 16.683 3.11.198.29.364.573.522.856l.044-.031L0 0Z"
                      transform="translate(34.305 19.664)"
                    />
                    <path
                      fill="#5ec821"
                      d="M0 0h-2a6.966 6.966 0 0 0 6.958 6.958v-2A4.964 4.964 0 0 1 0 0"
                      transform="translate(3.042 30)"
                    />
                    <path
                      fill="#5ec821"
                      d="M0 0h-2c0 5.514 4.486 10 10 10V8C3.589 8 0 4.411 0 0"
                      transform="translate(5 25)"
                    />
                    <path
                      fill="#5ec821"
                      d="M0 0v2c3 0 5 2 5 5h2c0-4-3-7-7-7"
                      transform="translate(30 1)"
                    />
                    <path
                      fill="#5ec821"
                      d="M0 0v2c4 0 8.042 4.042 8.042 8.042h2C10.042 4.042 6 0 0 0"
                      transform="translate(25 2.958)"
                    />
                  </g>
                </svg>
              </span>
              <a className="inline-block mr-4" href="#">
                <img
                  className="rounded-full max-w-none w-14 h-14"
                  src="https://randomuser.me/api/portraits/men/47.jpg"
                  alt="Avatar"
                />
              </a>
            </div>
          </div>
          <div className="px-6 flex justify-between items-center">
            <a className="inline-flex items-center" href="#">
              <span className="-m-1 rounded-full border-2 border-white dark:border-slate-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fill="url(#a12)"
                    d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Z"
                  />
                  <path
                    fill="#fff"
                    d="M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725.1.163.132.36.089.546-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666ZM3.6 7h.8a.6.6 0 0 1 .6.6v3.8a.6.6 0 0 1-.6.6h-.8a.6.6 0 0 1-.6-.6V7.6a.6.6 0 0 1 .6-.6Z"
                  />
                  <defs>
                    <linearGradient
                      id="a12"
                      x1="8"
                      x2="8"
                      y2="16"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#18AFFF" />
                      <stop offset="1" stopColor="#0062DF" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="-m-1 rounded-full border-2 border-white dark:border-slate-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fill="url(#b1231)"
                    d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Z"
                  />
                  <path
                    fill="#fff"
                    d="M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41Z"
                  />
                  <defs>
                    <linearGradient
                      id="b1231"
                      x1="8"
                      x2="8"
                      y2="16"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FF6680" />
                      <stop offset="1" stopColor="#E61739" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="font-bold ml-3">33</span>
            </a>
            <a className="ml-auto" href="#">
              23 comentarios
            </a>
          </div>
          <div className="px-6 space-y-6">
            <div className="relative">
              <input
                className="pt-2 pb-2 pl-3 w-full pr-20 h-10 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium"
                type="text"
                placeholder="Write a comment"
              />
              <span className="flex absolute right-3 top-2/4 -mt-3 items-center">
                <svg
                  className="mr-2"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"
                  />
                </svg>
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
            <div className="flex pb-4 group">
              <a className="mr-4" href="#">
                <img
                  className="rounded-full max-w-none w-11 h-11"
                  src="https://randomuser.me/api/portraits/men/84.jpg"
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
                    José Lody
                  </a>
                  <span className="text-slate-500 dark:text-slate-300">
                    03 minutes ago
                  </span>
                </div>
                <p className="text-sm">
                  {' '}
                  Congratulations on such a sincere friendship 😍😍😍
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
                    <span className="font-bold">2</span>
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

        {/** Card */}
        <article className="mb-4 space-y-6 pb-6 pt-6 break-inside rounded-xl overflow-hidden flex flex-col bg-clip-border text-sm bg-white dark:bg-slate-800 dark:text-white">
          <div className="flex px-6 items-center justify-between">
            <div className="flex">
              <a className="inline-block mr-4" href="#">
                <span className="flex items-center justify-center rounded-full max-w-none w-12 h-12 text-xl font-bold text-white bg-[#00c9a9]">
                  M
                </span>
              </a>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <a className="text-base font-bold mr-2" href="#">
                    Music companny
                  </a>
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-300">
                  {' '}
                  Has shared the following event{' '}
                </div>
              </div>
            </div>
          </div>
          <div className="flex relative flex-col justify-between">
            <div className="flex items-center justify-between absolute top-0 left-0 w-full p-6">
              <button className="flex items-center justify-center rounded-full w-9 h-9 transition-all bg-white text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  width="22"
                  height="22"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <button className="flex items-center justify-center rounded-full w-9 h-9 transition-all bg-white text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                  <polyline points="16 6 12 2 8 6" />
                  <line x1="12" y1="2" x2="12" y2="15" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-center justify-between absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#000000] to-[#00000000] text-white">
              <h4 className="uppercase font-medium">Proximo concierto</h4>
              <h5 className="text-3xl font-bold">Nika Porwards</h5>
              <p>9 sep.2022 | Salou, Tarragona</p>
              <div className="flex items-center mt-5 w-full gap-2">
                <button className="flex flex-1 items-center justify-center rounded-md px-4 py-2 space-x-2 transition-all font-medium bg-white text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    width="18"
                    height="18"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                    />
                  </svg>
                  <span>Entradas</span>
                </button>
                <button className="flex flex-1 items-center justify-center rounded-md px-4 py-2 space-x-2 transition-all font-medium bg-white text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    width="18"
                    height="18"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                  <span>Recuérdame</span>
                </button>
              </div>
            </div>
            <img
              src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?cs=srgb&dl=pexels-ali-pazani-2787341.jpg&fm=jpg"
              alt="cover"
              className="object-cover"
            />
          </div>
          <div className="px-6 flex justify-between items-center">
            <a className="inline-flex items-center" href="#">
              <span className="-m-1 rounded-full border-2 border-white dark:border-slate-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fill="url(#a12)"
                    d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Z"
                  />
                  <path
                    fill="#fff"
                    d="M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725.1.163.132.36.089.546-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666ZM3.6 7h.8a.6.6 0 0 1 .6.6v3.8a.6.6 0 0 1-.6.6h-.8a.6.6 0 0 1-.6-.6V7.6a.6.6 0 0 1 .6-.6Z"
                  />
                  <defs>
                    <linearGradient
                      id="a12"
                      x1="8"
                      x2="8"
                      y2="16"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#18AFFF" />
                      <stop offset="1" stopColor="#0062DF" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="-m-1 rounded-full border-2 border-white dark:border-slate-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fill="url(#b1231)"
                    d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Z"
                  />
                  <path
                    fill="#fff"
                    d="M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41Z"
                  />
                  <defs>
                    <linearGradient
                      id="b1231"
                      x1="8"
                      x2="8"
                      y2="16"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FF6680" />
                      <stop offset="1" stopColor="#E61739" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="font-bold ml-3">33</span>
            </a>
            <a className="ml-auto" href="#">
              1 comentario
            </a>
          </div>
          <div className="px-6 space-y-6">
            <div className="relative">
              <input
                className="pt-2 pb-2 pl-3 w-full pr-20 h-10 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium"
                type="text"
                placeholder="Write a comment"
              />
              <span className="flex absolute right-3 top-2/4 -mt-3 items-center">
                <svg
                  className="mr-2"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"
                  />
                </svg>
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
            <div className="flex pb-4 group">
              <a className="mr-4" href="#">
                <img
                  className="rounded-full max-w-none w-11 h-11"
                  src="https://randomuser.me/api/portraits/men/62.jpg"
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
                    Fabian Ruiz
                  </a>
                  <span className="text-slate-500 dark:text-slate-300">
                    03 minutes ago
                  </span>
                </div>
                <p className="text-sm">
                  {' '}
                  Please someone tell me the price of the tickets 🙏🙏🙏
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
                  <button className="py-1 px-2 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md">
                    1 Answer
                  </button>
                  <button className="py-1 px-2 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md">
                    Repply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
        {/** End Card */}

        {/** card */}
        <article className="break-inside relative flex flex-col justify-between overflow-hidden rounded-xl mb-4 text-sm bg-white dark:bg-slate-800 dark:text-slate-50">
          <div className="relative flex flex-col justify-between text-white bg-black min-h-[10rem]">
            <img
              src="https://images.pexels.com/photos/1742370/pexels-photo-1742370.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="Imagen"
            />
            <div className="absolute top-0 p-6">
              <span className="bg-[#00ff3e] px-3 py-1 rounded-md text-sm font-bold text-black">
                NEWS
              </span>
            </div>
          </div>
          <div className="p-4 space-y-4">
            <div className="flex flex-col space-y-2">
              <h2 className="text-2xl font-bold">News</h2>
              <p>16 January 2017</p>
            </div>
            <p>
              Lorem ipsum dolor sit amt amet de consectetet, consectetur 😋 🤪
              😬 adipiscing elit, sed do eiusmod.
            </p>
            <div className="relative">
              <input
                className="pt-2 pb-2 pl-3 w-full pr-20 h-10 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium"
                type="text"
                placeholder="Write a comment"
              />
              <span className="flex absolute right-3 top-2/4 -mt-3 items-center">
                <svg
                  className="mr-2"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"
                  />
                </svg>
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
                    src="https://randomuser.me/api/portraits/men/10.jpg"
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
                      Jhon Fernandez
                    </a>
                    <span className="text-slate-500 dark:text-slate-300">
                      04 minutes ago
                    </span>
                  </div>
                  <p className="text-sm">
                    {' '}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    😨😩😰{' '}
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
                      <span className="font-bold">2</span>
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
                    src="https://randomuser.me/api/portraits/women/75.jpg"
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
                      Alexandra
                    </a>
                    <span className="text-slate-500 dark:text-slate-300">
                      18 minutes ago
                    </span>
                  </div>
                  <p className="text-sm">
                    Dolor sit ameteiusmod consectetur adipiscing elit.
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
                      <span className="font-bold">2</span>
                    </a>
                    <button className="py-1 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md">
                      Repply
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <a
                  href="#"
                  className="py-3 px-4 w-full block bg-slate-100 dark:bg-slate-700 text-center rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition ease-in-out delay-75"
                >
                  Show more comments
                </a>
              </div>
            </div>
          </div>
        </article>

        {/** Card */}
        <article className="mb-4 py-6 space-y-6 break-inside rounded-xl flex flex-col bg-clip-border text-sm bg-white dark:bg-slate-800 dark:text-white">
          <div className="flex px-6 items-center justify-between">
            <div className="flex">
              <a className="inline-block mr-4" href="#">
                <img
                  className="rounded-full max-w-none w-12 h-12"
                  src="https://randomuser.me/api/portraits/women/12.jpg"
                  alt="Avatar"
                />
              </a>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <a className="text-base font-bold mr-2" href="#">
                    Alicia Gasperinni
                  </a>
                  <span className="">
                    <svg width="20" height="20" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M16 8C16 10.21 14.21 12 12 12C9.79 12 8 10.21 8 8L8.11 7.06L5 5.5L12 2L19 5.5V10.5H18V6L15.89 7.06L16 8M12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z"
                      />
                    </svg>
                  </span>
                </div>
                <div className="text-slate-500 dark:text-slate-300">
                  Medical Assistant
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/534362/pexels-photo-534362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="w-full object-cover min-h-[22rem]"
              alt="Image"
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between text-white bg-[#46131357]">
              <div className="p-6 space-y-3">
                <h1 className="text-4xl font-extrabold leading-snug text-white">
                  Best photo
                  <br />
                  package
                </h1>
              </div>
              <div className="p-6 bg-gradient-to-t flex items-center justify-between from-[#000000b6] to-[#0000]">
                <span>16 January 2017</span>
                <button className="py-2 px-6 font-bold rounded-full uppercase bg-white text-black">
                  DONWLOAD
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center px-6">
            <a className="inline-flex items-center" href="#">
              <span className="-m-1 rounded-full border-2 border-white dark:border-slate-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path fill="url(#a)" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Z" />
                  <path
                    fill="#fff"
                    d="M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725.1.163.132.36.089.546-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666ZM3.6 7h.8a.6.6 0 0 1 .6.6v3.8a.6.6 0 0 1-.6.6h-.8a.6.6 0 0 1-.6-.6V7.6a.6.6 0 0 1 .6-.6Z"
                  />
                  <defs>
                    <linearGradient
                      id="a"
                      x1="8"
                      x2="8"
                      y2="16"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#18AFFF" />
                      <stop offset="1" stopColor="#0062DF" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="-m-1 rounded-full border-2 border-white dark:border-slate-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path fill="url(#b)" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Z" />
                  <path
                    fill="#fff"
                    d="M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41Z"
                  />
                  <defs>
                    <linearGradient
                      id="b"
                      x1="8"
                      x2="8"
                      y2="16"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FF6680" />
                      <stop offset="1" stopColor="#E61739" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="-m-1 rounded-full border-2 border-white dark:border-slate-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fill="url(#aa)"
                    d="M16 8A8 8 0 1 1-.001 8 8 8 0 0 1 16 8"
                  />
                  <path
                    fill="url(#bb)"
                    d="M3 8.008C3 10.023 4.006 14 8 14c3.993 0 5-3.977 5-5.992C13 7.849 11.39 7 8 7c-3.39 0-5 .849-5 1.008Z"
                  />
                  <path
                    fill="url(#cc)"
                    d="M4.541 12.5c.804.995 1.907 1.5 3.469 1.5 1.563 0 2.655-.505 3.459-1.5-.551-.588-1.599-1.5-3.459-1.5s-2.917.912-3.469 1.5Z"
                  />
                  <path
                    fill="#2A3755"
                    d="M6.213 4.144c.263.188.502.455.41.788-.071.254-.194.369-.422.37-.78.012-1.708.256-2.506.613-.065.029-.197.088-.332.085-.124-.003-.251-.058-.327-.237-.067-.157-.073-.388.276-.598.545-.33 1.257-.48 1.909-.604-.41-.303-.85-.56-1.315-.768-.427-.194-.38-.457-.323-.6.127-.317.609-.196 1.078.026a9 9 0 0 1 1.552.925Zm3.577 0a8.955 8.955 0 0 1 1.55-.925c.47-.222.95-.343 1.078-.026.057.143.104.406-.323.6a7.028 7.028 0 0 0-1.313.768c.65.123 1.363.274 1.907.604.349.21.342.44.276.598-.077.18-.203.234-.327.237-.135.003-.267-.056-.332-.085-.797-.357-1.725-.6-2.504-.612-.228-.002-.351-.117-.422-.37-.091-.333.147-.6.41-.788v-.001Z"
                  />
                  <defs>
                    <linearGradient
                      id="aa"
                      x1="8"
                      x2="8"
                      y1="1.64"
                      y2="16"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FEEA70" />
                      <stop offset="1" stopColor="#F69B30" />
                    </linearGradient>
                    <linearGradient
                      id="bb"
                      x1="8"
                      x2="8"
                      y1="7"
                      y2="14"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#472315" />
                      <stop offset="1" stopColor="#8B3A0E" />
                    </linearGradient>
                    <linearGradient
                      id="cc"
                      x1="8.005"
                      x2="8.005"
                      y1="11"
                      y2="13.457"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FC607C" />
                      <stop offset="1" stopColor="#D91F3A" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="font-bold ml-3">33</span>
            </a>
            <a className="ml-auto" href="#">
              5 comments
            </a>
          </div>
          <div className="px-6 flex items-start justify-start">
            <a className="inline-block mr-4" href="#">
              <img
                className="rounded-full max-w-none w-10 h-10"
                src="https://randomuser.me/api/portraits/men/12.jpg"
                alt="avatar"
              />
            </a>
            <div className="flex-1 relative">
              <input
                className="pt-2 pb-2 pl-3 w-full pr-20 h-10 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium"
                type="text"
                placeholder="Write a comment"
              />
              <span className="flex absolute right-3 top-2/4 -mt-3 items-center">
                <svg
                  className="mr-2"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"
                  />
                </svg>
                <svg
                  className="fill-blue-500 dark:fill-slate-50"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
                </svg>
              </span>
            </div>
          </div>
          <div className="px-6">
            <div className="flex flex-row justify-between">
              <a
                href="#"
                className="flex items-center font-medium space-x-1 group"
              >
                <span className="p-3 rounded-full group-hover:bg-slate-100 dark:group-hover:bg-slate-700">
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    aria-hidden="true"
                  >
                    <g>
                      <path
                        fill="currentColor"
                        d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"
                      />
                    </g>
                  </svg>
                </span>
              </a>
              <a
                href="#"
                className="flex items-center font-medium space-x-1 group"
              >
                <span className="p-3 rounded-full group-hover:bg-slate-100 dark:group-hover:bg-slate-700">
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    aria-hidden="true"
                  >
                    <g>
                      <path
                        fill="currentColor"
                        d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"
                      />
                      <path
                        fill="currentColor"
                        d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"
                      />
                    </g>
                  </svg>
                </span>
              </a>
              <a
                href="#"
                className="flex items-center font-medium space-x-1 group"
              >
                <span className="p-3 rounded-full group-hover:bg-slate-100 dark:group-hover:bg-slate-700">
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    aria-hidden="true"
                  >
                    <g>
                      <path
                        fill="currentColor"
                        d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"
                      />
                    </g>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </article>
        {/** End Card */}
      </div>
    </div>
  )
}

export default App

//
// {/** card */}
// <div className='break-inside rounded-xl mb-4 p-6 bg-white dark:bg-slate-800 dark:text-white'>card</div>
//
