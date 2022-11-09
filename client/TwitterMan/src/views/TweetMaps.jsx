import React from 'react'
import { Map, Marker } from "pigeon-maps"

const TweetMaps = () => {
  return (
    <>
      <div className='flex flex-1 flex-col text-white'>
        <div className='flex flex-1 justify-center text-3xl font-bold p-5'>TweetMaps</div>
        <div className='p-5'>
          <Map height={500} defaultCenter={[50.879, 4.6997]} defaultZoom={5}>
            <Marker width={50} anchor={[44.494887, 11.3426163]} />
            <Marker width={50} anchor={[43, 21]} />
          </Map>
        </div>
      </div>
    </>
  )
}

export default TweetMaps
