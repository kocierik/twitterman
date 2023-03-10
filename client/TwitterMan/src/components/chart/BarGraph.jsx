import React, { useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

const BarGraph = ({ tweets, frequency }) => {
  const [data, setData] = useState([])

  const newDate = (s) => {
    return new Date(s)
  }

  const getDateString = (s) => {
    var d = newDate(s)
    return (
      d.getFullYear().toString() +
      '-' +
      ((d.getMonth() + 1).toString().length == 2
        ? (d.getMonth() + 1).toString()
        : '0' + (d.getMonth() + 1).toString()) +
      '-' +
      (d.getDate().toString().length == 2
        ? d.getDate().toString()
        : '0' + d.getDate().toString()) +
      ' ' +
      (d.getHours().toString().length == 2
        ? d.getHours().toString()
        : '0' + d.getHours().toString()) +
      ':' +
      ((parseInt(d.getMinutes() / 5) * 5).toString().length == 2
        ? (parseInt(d.getMinutes() / 5) * 5).toString()
        : '0' + (parseInt(d.getMinutes() / 5) * 5).toString())
    )
  }

  const addMinutes = (minutes, date) => {
    var newdate = newDate(date)
    newdate.setMinutes(newdate.getMinutes() + minutes)
    return newdate
  }

  // prede la prima data e l'ultima dai tweet e costruisce un array di date ad intervalli dati dalla frequenza
  const getDateListWithFreq = () => {
    var dateWithFreqList = []
    var firstDate = newDate(
      Math.min.apply(
        null,
        tweets.map((tw) => {
          return newDate(tw.timestamp)
        })
      )
    )
    firstDate.setHours(0, 0, 0, 0)
    var lastDate = newDate(
      Math.max.apply(
        null,
        tweets.map((tw) => {
          return newDate(tw.timestamp)
        })
      )
    )
    lastDate.setDate(lastDate.getDate() + 1) // a day offset
    lastDate.setHours(0, 0, 0)
    dateWithFreqList.push(firstDate)

    var nextFrequencyDate = addMinutes(frequency, firstDate)
    while (nextFrequencyDate < lastDate) {
      dateWithFreqList.push(nextFrequencyDate)
      nextFrequencyDate = addMinutes(frequency, nextFrequencyDate)
    }
    dateWithFreqList.push(nextFrequencyDate)
    return dateWithFreqList
  }

  const elaborateFrequency = () => {
    var tmp = {}
    var dateListWithFreq = getDateListWithFreq()

    // inizializzo il dizionario
    dateListWithFreq.forEach((d) => {
      var dateStr = getDateString(d)
      tmp[dateStr] = 0
    })

    tweets.forEach((tw) => {
      var twdate = newDate(tw.timestamp)
      for (let i = 0; i < dateListWithFreq.length; i++) {
        if (twdate < dateListWithFreq[i]) {
          var dstr = getDateString(dateListWithFreq[i - 1])
          tmp[dstr] += 1
          break
        }
      }
    })

    // formattiamo i dati per come li vuole la libreria
    var zeroDates = []
    var dataReturned = []
    for (const [key, value] of Object.entries(tmp)) {
      if (zeroDates.length >= 0 && value === 0) {
        zeroDates.push(key)
      } else if (zeroDates.length > 0 && value !== 0) {
        if (zeroDates.length === 1)
          dataReturned.push({ name: zeroDates[0], number: 0 })
        else
          dataReturned.push({
            name: `${zeroDates[0]} - ${zeroDates[zeroDates.length - 1]}`,
            number: 0,
          })
        zeroDates = []
      }
      if (value !== 0) dataReturned.push({ name: key, number: value })
    }

    return dataReturned
  }

  useEffect(() => {
    setData(elaborateFrequency())
  }, [tweets, frequency])

  return (
    <BarChart
      width={300}
      height={300}
      data={data}
      margin={{
        right: 35,
        bottom: 40,
      }}
      barSize={20}
    >
      <XAxis
        angle={-20}
        dataKey="name"
        scale="point"
        padding={{ left: 10, right: 10, top: 50 }}
      />
      <YAxis />
      <Tooltip />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="number" fill="#8884d8" background={{ fill: '#eee' }} />
    </BarChart>
  )
}

export default BarGraph
