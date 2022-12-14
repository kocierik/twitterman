import React, { useEffect, useState } from 'react'
import { Map, Marker } from 'pigeon-maps'
import * as Const from '../utils'
import { useParams } from 'react-router-dom'

const TweetMaps = () => {
  const [geo, setGeo] = useState([])
  const params = useParams()

  const getPosition = async () => {
    const url = Const.stringFormat(
      Const.SERVER_URL + Const.TWEET_ID,
      params?.id
    )
    const dataPosition = await fetch(url)
    const resp = await dataPosition.json()
    setGeo(resp)
  }
  useEffect(() => {
    getPosition()
  }, [])

  return (
    <>
      <div className="flex flex-1 flex-col text-white dark:bg-gray-900">
        <div className="flex flex-1 italic justify-center text-3xl font-bold p-5">
          TweetMaps
        </div>
        <div className="p-5">
          <Map height={500} defaultCenter={[50.879, 4.6997]} defaultZoom={5}>
            {geo?.map((pos, i) => {
              const x = pos.geo.coordinates.x
              const y = pos.geo.coordinates.y
              return <Marker key={i} width={50} anchor={[x, y]} />
            })}
          </Map>
        </div>
      </div>
    </>
  )
}

export default TweetMaps
