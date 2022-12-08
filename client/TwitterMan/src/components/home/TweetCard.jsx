import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Const from '../../utils'
import Setting from './Setting'

const TweetCard = ({ data }) => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [sentimentIcon, setSentimetIcon] = useState('?')

  const saveTweet = async (tweetId) => {
    let res = await fetch(
      Const.stringFormat(
        Const.SERVER_URL + Const.TWEET_SAVE,
        'genovese24',
        'preferiti',
        tweetId
      )
    )
    res = await res.json()
    console.log(res)
  }

  const settingInfoDescription = [
    {
      name: 'Maps',
      setting: () => navigate(`/tweetMaps/${data.id}`),
    },
    {
      name: 'Save tweet',
      setting: () => saveTweet(data.id),
    },
  ]
  useEffect(() => {
    switch (data.sentiment) {
      case 'positive':
        setSentimetIcon('😀')
        break
      case 'neutral':
        setSentimetIcon('😐')
        break
      case 'negative':
        setSentimetIcon('🙁')
        break
    }
    if (data.geo.id) {
      console.log(data.geo)
    }
  }, [data])

  return (
    <article
      id={data.id}
      className="place-self-start  transition hover:-translate-y-1 mb-4 break-inside px-6 py-4 rounded-xl flex flex-col text-sm bg-white bg-slate-800 text-white"
    >
      <div className="flex pb-5 items-start justify-between">
        <div className="flex">
          <a className="inline-block mr-4 " href="#">
            <img
              className="rounded-full max-w-none w-12 h-12 gap-1"
              src={data.propic}
              alt="Avatar"
            />
          </a>
          <div className="flex flex-col" style={{ flex: '1 0 auto' }}>
            <div>
              <a className="inline-block text-base font-bold" href="#">
                {data.name}
              </a>
            </div>
            <div className="text-slate-500 text-slate-400">
              {' '}
              {data.timestamp.replace('T', ' ').slice(0, -5)}{' '}
            </div>
          </div>
        </div>

        {!isOpen && (
          <div
            style={{ width: '100%', display: 'flex' }}
            className="justify-end"
          >
            <Setting settingInfoDesk={settingInfoDescription} />{' '}
          </div>
        )}
      </div>

      <p className="text-sm text-slate-200"> {data.content} </p>
      <div>
        {data.media?.map((img, i) => {
          if (img.url == 'video') {
            return <img key={i} src={img.preview_image} alt="img" />
          }
          return <img key={i} src={img.url} alt="img" />
        })}
      </div>
      <div className="py-4 flex">
        <div className="inline-flex items-center">
          <span className="m-2">
            <svg
              className="fill-rose-600 fill-rose-400"
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
          <span className="font-bold">
            {data.public_metrics?.retweet_count}
          </span>
        </div>
        <div className="inline-flex items-center">
          <span className="m-2">{sentimentIcon}</span>
          <span className="font-bold">{data.sentiment}</span>
        </div>
        {data.geo.id && (
          <span
            className="flex flex-1 justify-end self-center cursor-pointer"
            onClick={() => {
              navigate(`/tweetMaps/${data.id}`)
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM8.547 4.505a8.25 8.25 0 1011.672 8.214l-.46-.46a2.252 2.252 0 01-.422-.586l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.654-.261a2.25 2.25 0 01-1.384-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.279-2.132z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        )}
      </div>
    </article>
  )
}

export default TweetCard
