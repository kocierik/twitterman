import React, {useEffect} from 'react'
import Comments from './Comments'

const TweetCard = ({ data }) => {
  return (
    <article
      id={data.id}
      data-aos="zoom-in"
      data-aos-duration="700"
      className="place-self-start mb-4 break-inside px-6 py-4 rounded-xl flex flex-col text-sm bg-white dark:bg-slate-800 dark:text-white"
    >
      <div className="flex pb-5 items-start justify-between">
        <div className="flex">
          <a className="inline-block mr-4" href="#">
            <img
              className="rounded-full max-w-none w-12 h-12"
              src={data.propic}
              alt="Avatar"
            />
          </a>
          <div className="flex flex-col">
            <div>
              <a className="inline-block text-base font-bold" href="#">
                {data.name}
              </a>
            </div>
            <div className="text-slate-500 dark:text-slate-400">
              {' '}
              {data.timestamp}{' '}
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

      <p className="text-sm dark:text-slate-200"> {data.content} </p>
      <div>
        {data.media?.map((img, i) => {
          if (img.url == "video") {
            return <img key={i} src={img.preview_image} alt="img" />
          }
          return <img key={i} src={img.url} alt="img" />
        })}
      </div>
      <div className="py-4">
        <div className="inline-flex items-center">
          <span className="m-2">
            <svg
              className="fill-rose-600 dark:fill-rose-400"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
            </svg>
          </span>
          <span className="font-bold">{data.public_metrics?.like_count}</span>
        </div>
        <div className="inline-flex items-center">
          <span className="m-2">
            <svg
              width="20px"
              height="20px"
              className="fill-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 7a1 1 0 0 0-1-1h-8v2h7v5h-3l3.969 5L22 13h-3V7zM5 17a1 1 0 0 0 1 1h8v-2H7v-5h3L6 6l-4 5h3v6z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
              />
            </svg>
          </span>
          <span className="font-bold">{data.public_metrics?.retweet_count}</span>
        </div>
      </div>
      {/* {data.comments.length !== 0 && (
        <hr class=" h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
      )}
      {data.comments.map((comment, i) => {
        return <Comments comment={comment} key={i} />
      })} */}
    </article>
  )
}

export default TweetCard
