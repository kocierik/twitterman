import React, { useState } from 'react'
import { Map, Marker } from 'pigeon-maps'
import { useEffect } from 'react'

const Maps = ({ tweetsData }) => {
  const [data, setData] = useState()

  useEffect(() => {
    setData(tweetsData)
  }, [tweetsData])

  return (
    <>
      <Map height={500} defaultCenter={[50.879, 4.6997]} defaultZoom={5}>
        {data?.map((tweet, i) => {
          return (
            <Marker
              key={i}
              width={50}
              anchor={[tweet?.geo?.coordinates?.x, tweet?.geo?.coordinates?.y]}
            />
          )
        })}
      </Map>
    </>
  )
}

export default Maps
