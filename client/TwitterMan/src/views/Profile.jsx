import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import TweetCard from '../components/home/TweetCard'
import * as Const from '../utils'
const Profile = () => {
  const [user, setUser] = useState()

  const getUserInfo = async () => {
    await Const.getUserInfo('genovese24', setUser)
    console.log(user.saved.map((item) => console.log(item)))
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <>
      <main className="profile-page" data-aos="zoom-in" data-aos-duration="500">
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
                <div data-aos="zoom-in" className="flex flex-col items-center">
                  <div className="flex flex-row p-5">
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r mr-5 from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Blue
                    </button>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r ml-5 from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Reset Password
                    </button>
                  </div>
                  <div className="w-full text-white px-4 lg:order-1">
                    <div className="box-border  m-auto max-w-[75rem] 3xl:max-w-[120rem] columns-1xs sm:columns-2xs md:columns-2 lg:columns-3 xl:columns-3 2xl:columns-3 3xl:columns-5">
                      {/* {user?.saved?.map((tweet, i) => {
                        return <TweetCard data={tweet} key={i} />
                      })} */}
                    </div>
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
