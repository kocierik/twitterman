import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { useEffect } from 'react'
import { PieChart, Pie, Cell } from 'recharts'
import { SERVER_URL } from '../utils'
import BarGraph from '../components/chart/BarGraph'
import WordCloud from '../components/chart/WordCloud'
import Maps from '../components/home/Maps'

const getUserInfo = async (selectValue, textValue) => {
  let final = null
  try {
    let res = await fetch(`${SERVER_URL}${selectValue}${textValue}`)
    res = await res.json()
    if (!res) {
      alert('User info not found')
    }
    return res
  } catch (e) {
    console.log(e)
  }
}

const searchTweets = async (selectValue, textValue, formattedDates) => {
  let final = null
  try {
    console.log(`${SERVER_URL}${selectValue}${textValue}${formattedDates}`)
    let res = await fetch(
      `${SERVER_URL}${selectValue}${textValue}${formattedDates}`
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

const EreditaScreen = ({ result, stats, tweetsData, errorTweets }) => {
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
    <div
      data-aos="zoom-in"
      data-aos-duration="700"
      className="min-h-full px-5 dark:bg-gray-900 pt-1"
    >
      <div className="flex flex-col justify-center text-white">
        <div className="flex flex-col  md:flex-row gap-9 flex-1 p-5 justify-center text-white">
          <div className="pr-3">
            <div className="text-center">
              <h1 className="text-3xl text-center pt-10 pb-5">
                Parola del giorno:
              </h1>
              <p className="bold text-5xl">{result.word}</p>
            </div>
            <div className="text-center flex justify-center p-5">
              <table>
                <tbody>
                  <tr className="text-gray-500">
                    <th>#</th>
                    <th>Photo</th>
                    <th>Username</th>
                    <th>Time</th>
                  </tr>

                  {result.winners?.map((p) => {
                    return (
                      <>
                        <tr key={p.position}>
                          <td className="p-3 text-3xl">{p.medal}</td>
                          <td className="p-3">
                            <a
                              href={`https://twitter.com/${p.name.replace(
                                '@',
                                ''
                              )}`}
                              target="_blank"
                            >
                              <img
                                className="rounded-full max-w-none w-12 h-12"
                                src={p.propic}
                                alt="avatar"
                              />
                            </a>
                          </td>
                          <td className="p-1">
                            <a
                              href={`https://twitter.com/${p.name.replace(
                                '@',
                                ''
                              )}`}
                              target="_blank"
                            >
                              {p.name}
                            </a>
                          </td>
                          <td className="p-3">{p.time}</td>
                          <td className="p-3">{p.url}</td>
                        </tr>
                      </>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="pt-10 pl-4">
            <span className="pl-4">Ecco gli altri partecipanti</span>
            <div class="overflow-y-auto h-80 mx-auto bg-gray-800 shadow-lg ring-1 ring-black/5 rounded-xl flex flex-col divide-y-4 divide-slate-400/25">
              {errorTweets?.map((p) => {
                return (
                  <div>
                    <div class="flex items-center gap-4 p-4">
                      <a
                        href={`https://twitter.com/${p.username}`}
                        target="_blank"
                      >
                        <img class="w-12 h-12 rounded-full" src={p.propic} />
                      </a>
                      <div class="flex flex-col">
                        <strong class="text-slate-200 text-sm font-medium">
                          <a
                            href={`https://twitter.com/${p.username}`}
                            target="_blank"
                          >
                            {p.username}
                          </a>
                        </strong>
                      </div>
                    </div>
                    <span className="text-white p-6">{p.content}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 dark:bg-gray-900">
        <div className="flex italic flex-1 italic dark:bg-gray-900 text-white justify-center text-3xl font-bold p-5">
          Charts
        </div>
        <div className="flex flex-col  md:flex-row gap-5 flex-1 p-5 justify-center text-black">
          <div
            href="#"
            className="block flex flex-col p-6 max-w-sm  rounded-lg border border-gray-200 shadow-md  bg-gray-800 border-gray-700 "
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white">
              Piechart
              <hr className="my-3 mx-auto h-1 bg-gray-100 rounded border-0  bg-gray-700" />
            </h5>
            <div className="flex flex-1 justify-center items-end">
              <PieChart width={350} height={300}>
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
          <div
            href="#"
            className="block flex flex-col p-6 max-w-sm  rounded-lg border border-gray-200 shadow-md  bg-gray-800 border-gray-700 "
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white">
              BarGraph analysis
              <hr className="my-3 mx-auto h-1 bg-gray-100 rounded border-0  bg-gray-700" />
            </h5>
            <div className="flex flex-1 justify-center items-end">
              <BarGraph tweets={tweetsData} frequency={60} />
            </div>
          </div>
          <div
            href="#"
            className="block p-6 max-w-sm  rounded-lg border border-gray-200 shadow-md bg-gray-800   border-gray-700 "
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white">
              Word Cloud
              <hr className="my-3 mx-auto h-1 bg-gray-100 rounded border-0  bg-gray-700" />
            </h5>
            <div className="flex flex-1 justify-center p-5">
              <WordCloud
                contentData={tweetsData.map((tweet) => tweet.content)}
              />
            </div>
          </div>
        </div>
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
  const [tweetsData, setTweetsData] = useState([])
  const [errorTweets, setErrorTweets] = useState([])
  const color = '#ffffff'
  let images = []
  let username = []
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
    let error = []
    if (checkNullDate(selectedDate)) {
      let giuste = 0
      let sbagliate = 0
      let tw = await searchTweets(
        `/tweet`,
        '/hashtag/ghigliottina',
        `/date/${formatDate(selectedDate)}`
      )
      setTweetsData(tw)
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
              let w = {}
              w.username = t.username
              w.propic = t.propic
              w.content = t.content
              error.push(w)
              sbagliate++
            }
          }
        }
        setErrorTweets(error)
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
        `/tweet`,
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
              w.medal = s[0]
              w.position = i - 1
              w.name = s[1]
              w.time = s[3]
              w.url = ''
              // call endpoint for user info to retrieve user propic
              let user_info = await getUserInfo(
                '/getUserInfo/',
                w.name.replace('@', '')
              )
              w.propic = user_info.profile_image_url
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
      <div
        data-aos="zoom-in"
        data-aos-duration="700"
        className="min-h-full px-5 dark:bg-gray-900 pt-5"
      >
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
          <EreditaScreen
            result={ereditaResultJson}
            stats={stats}
            tweetsData={tweetsData}
            errorTweets={errorTweets}
          />
        ) : (
          <h1 className="text-5xl text-center pt-20 pb-5 text-white">
            Oggi non hanno giocato all'eredita
          </h1>
        )}
      </div>
    </>
  )
}

export default Eredita
