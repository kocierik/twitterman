import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CardFolder from '../components/profile/CardFolder'
import * as Const from '../utils'

const Profile = ({ isLogged }) => {
  const [user, setUser] = useState()
  const [savedUserTweets, setSavedUserTweets] = useState([])
  const [showDelete, setShowDelete] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLogged) navigate('/')
  }, [])

  const getUserInfo = async () => {
    await Const.getUserInfo(setUser)
  }
  const getSavedUserTweets = () => {
    if (user) {
      setSavedUserTweets(user.saved)
    }
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  useEffect(() => {
    getSavedUserTweets()
  }, [user])

  return (
    <>
      <main className="profile-page" data-aos="zoom-in" data-aos-duration="500">
        {showDelete && (
          <div
            id="popup-modal"
            tabIndex="-1"
            className="fixed flex justify-center items-center top-0 left-0 right-0 z-50  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
          >
            <div className="relative w-full h-full max-w-md md:h-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-toggle="popup-modal"
                  onClick={() => setShowDelete(false)}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="p-6 text-center">
                  <svg
                    aria-hidden="true"
                    className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Are you sure you want to delete this product?
                  </h3>
                  <button
                    data-modal-toggle="popup-modal"
                    type="button"
                    className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                  >
                    Yes, I'm sure
                  </button>
                  <button
                    data-modal-toggle="popup-modal"
                    type="button"
                    onClick={() => setShowDelete(false)}
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  >
                    No, cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <section className="relative block" style={{ height: '500px' }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1525466239942-e1df8ae0db1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full  pointer-events-none overflow-hidden"
            style={{ height: '70px' }}
          >
            <svg
              className=" bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-gray-900 w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    {/* test */}
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-white mb-2">
                    {user?.username}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-white font-bold uppercase">
                    <i className="fas fa-map-marker-alt text-lg text-white"></i>{' '}
                    {user?.email}
                  </div>
                </div>

                <div data-aos="zoom-in" className="flex  flex-col items-center">
                  <div className="flex flex-wrap flex-row p-5 justify-center">
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r ml-5 from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Modifica informazioni
                    </button>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r ml-5 from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Tweets Salvati
                    </button>
                    <button
                      type="button"
                      data-modal-toggle="popup-modal"
                      onClick={() => {
                        setShowDelete(true)
                        console.log(showDelete)
                      }}
                      className="text-white bg-gradient-to-r ml-5 from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Delete Account
                    </button>
                  </div>
                  <div className="w-full text-white px-4 lg:order-1">
                    {user?.saved?.map((folder, i) => {
                      return (
                        <CardFolder
                          key={i}
                          titleFolder={folder.name}
                          tweets={folder.tweets}
                        />
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Profile
