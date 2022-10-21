import React from 'react'

const Comments = ({ comment }) => {
  return (
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
              {comment.name}
            </a>
            <span className="text-slate-500 dark:text-slate-300">
              {comment.timestamp}
            </span>
          </div>
          <p className="text-sm">{comment.content}</p>
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
              <span className="font-bold">{comment.likes}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comments
