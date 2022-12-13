import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { useEffect } from 'react'
import { PieChart, Pie, Cell } from 'recharts'
import { SERVER_URL } from '../utils'

const searchTweets = async (selectValue, textValue, formattedDates) => {
  let final = null
  try {
    let res = await fetch(
      `${SERVER_URL}${selectValue}90${textValue}${formattedDates}`
    )
    res = await res.json()
    if (!res.message) {
      res.forEach((tw) => {
        var s = tw.content + ' '
        tw.content = s.replace(/(http|https)(.*?)( )/g, '')
      })
      final = res
    } else {
      alert(res ? res.message : 'Tweets not found')
    }
  } catch (e) {
    console.log(e)
  }
  return final
}

const EreditaScreen = ({ result, stats }) => {
  const cx = 180
  const cy = 150
  const COLORS = ['#00C49F', '#FF8042']

  const renderLabel = ({ x, y, name, value }) => {
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${name} (${value})`}
      </text>
    )
  }

  return (
    <div className="flex flex-col justify-center text-white">
      <div className="text-center">
        <h1 className="text-5xl text-center pt-20 pb-5">Parola del giorno:</h1>
        <p className="bold text-2xl">{result.word}</p>
      </div>
      <div className="text-center flex justify-center p-5">
        <table>
          <tbody>
            {result.winners?.map((p) => {
              return (
                <tr key={p.position}>
                  <td className="p-3">{p.position}</td>
                  <td className="p-3">{p.name}</td>
                  <td className="p-3">{p.time}</td>
                  <td className="p-3">{p.url}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="text-center flex justify-center p-5">
        <PieChart width={350} height={500}>
          <Pie
            label={renderLabel}
            data={stats}
            cx={cx}
            cy={cy}
            outerRadius={80}
            innerRadius={60}
          >
            {stats.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  )
}

const Eredita = () => {
  const [ereditaResultJson, setEreditaResultJson] = useState(null)
  const [stats, setStats] = useState([
    { name: 'giusti', value: 0 },
    { name: 'sbagliati', value: 0 },
  ])
  const [selectedDate, setSelectedDate] = useState(new Date())
  const color = '#ffffff'

  const format = (myint) => {
    return myint > 9 ? myint : '0' + myint.toString()
  }

  function formatDate(mydate) {
    let formattedDate = `${mydate['$y']}-${
      parseInt(format(mydate['$M'])) + 1
    }-${format(mydate['$D'])}`
    let start = `${formattedDate}T00:00:00.000Z`
    let end = ''
    let today = new Date()
    if (
      mydate['$y'] == today.getFullYear() &&
      mydate['$M'] == today.getMonth() &&
      mydate['$D'] == today.getDate()
    ) {
      end = `${formattedDate}T${format(mydate['$H'])}:${format(
        mydate['$m']
      )}:${format(mydate['$s'])}.000Z`
    } else {
      end = `${formattedDate}T23:59:59.000Z`
    }
    return `${start}/${end}`
  }

  function checkNullDate(mydate) {
    let flag = true
    let keys = ['$m', '$y', '$M', '$D', '$s', '$H']
    for (let k of keys) {
      flag = mydate[k] != undefined && flag
    }
    return flag
  }

  async function getStats(rightWord) {
    if (checkNullDate(selectedDate)) {
      let giuste = 0
      let sbagliate = 0
      let tw = await searchTweets(
        `/tweet/`,
        '/hashtag/ghigliottina',
        `/date/${formatDate(selectedDate)}`
      )
      if (tw != null) {
        for (let t of tw) {
          let split = t.content.split(' ')
          let finalsplit = []
          for (let s of split) {
            s = s.replace('\n', '')
            if (s != '' && !s.includes('#')) {
              finalsplit.push(s.replace('?', '').toUpperCase())
            }
          }
          if (finalsplit.length == 1) {
            if (rightWord == finalsplit[0]) {
              giuste++
            } else {
              sbagliate++
            }
          }
        }
      }
      return [
        { name: 'giusti', value: giuste },
        { name: 'sbagliati', value: sbagliate },
      ]
    }
  }

  async function getQuizzettone() {
    let mydata = null
    if (checkNullDate(selectedDate)) {
      let tw = await searchTweets(
        `/tweet/`,
        '/user/quizzettone',
        `/date/${formatDate(selectedDate)}`
      )
      if (tw != null) {
        for (let t of tw) {
          if (
            t.content &&
            t.content.includes(
              'Per #leredità su Twitter, i campioni più veloci della #ghigliottina sono:'
            )
          ) {
            if (mydata == null) {
              mydata = {}
            }
            const splitted = t.content.split('\n')
            mydata.winners = []
            for (let i = 2; i <= 4; i++) {
              let w = {}
              let s = splitted[i].split(' ')
              w.position = i - 1
              w.name = s[1]
              w.time = s[3]
              w.url = ''
              mydata.winners.push(w)
            }
          } else if (
            t.content.includes(
              'La #parola della #ghigliottina de #leredita di oggi è:'
            )
          ) {
            if (mydata == null) {
              mydata = {}
            }
            let rightword = t.content
              .split(
                'La #parola della #ghigliottina de #leredita di oggi è:'
              )[1]
              .split(' ')[1]
            mydata.word = rightword.substring(0, rightword.length - 3)
          }
        }
      }
    }
    return mydata
  }

  async function init() {
    let res = await getQuizzettone()
    setEreditaResultJson(res)
  }

  async function stats_async() {
    if (ereditaResultJson != null) {
      setStats(await getStats(ereditaResultJson.word))
    }
  }

  useEffect(() => {
    stats_async()
  }, [ereditaResultJson])

  useEffect(() => {
    init()
  }, [selectedDate])

  useEffect(() => {
    init()
  }, [])

  return (
    <>
      <div className="flex justify-center align-center pt-5">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Seleziona giorno"
            value={selectedDate}
            onChange={(newValue) => {
              setSelectedDate(newValue)
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                sx={{
                  svg: { color },
                  input: { color },
                  label: { color },
                }}
              />
            )}
          />
        </LocalizationProvider>
      </div>
      {ereditaResultJson != null ? (
        <EreditaScreen result={ereditaResultJson} stats={stats} />
      ) : (
        <h1 className="text-5xl text-center pt-20 pb-5 text-white">
          Oggi non hanno giocato all'eredita
        </h1>
      )}
    </>
  )
}

export default Eredita
