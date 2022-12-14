import { useEffect, useState } from 'react'
import { SERVER_URL } from '../utils'
import TweetCard from '../components/home/TweetCard'

const searchTweets = async (selectValue, textValue, formattedDates) => {
  let final = null;
  try {
    let res = await fetch(`${SERVER_URL}${selectValue}${textValue}${formattedDates}`)
    res = await res.json()
    if (!res.message) {
      res.forEach((tw) => {
        var s = tw.content + ' '
        tw.content = s.replace(/(http|https)(.*?)( )/g, '')
      })
      final = res;
    } else {
      alert(res ? res.message : 'Tweets not found')
    }
  } catch (e) {
    console.log(e)
  }
  return final;
}

function formatDate() {
  let today = new Date();
  let before = new Date();
  before.setDate(today.getDate() - 6);
  return `${before.toISOString()}/${today.toISOString()}`;
}

function Fantacitorio() {
  const [punteggi, setPunteggi] = useState([]);
  const [squadre, setSquadre] = useState([])

  async function trovaPunti() {
    let final = [];
    let tw = await searchTweets(`/tweet`, '/user/fanta_citorio', `/date/${formatDate()}`);
    for (let t of tw) {
      let splitted = t.content.split("\n")
      for (let s of splitted) {
        if (s.includes("PUNTI")) {
          try {
            let divided = s.split(" - ");
            let punti = parseInt(divided[0].split(" ")[0])
            let nome = divided[1]
            let flag = false;
            for (let p of final) {
              if (p.name == nome) {
                flag = true;
                p.score += punti;
              }
            }
            if (!flag) {
              final.push({ "name": nome, "score": punti })
            }
          } catch (err) {
            console.log(err);
          }
        }
      }
    }
    final = final.sort((a, b) => {
      return a.score < b.score;
    });
    console.log(final);
    for (let i in final) {
      final[i]["position"] = parseInt(i) + 1;
    }
    setPunteggi(final);
  }

  async function trovaSquadre() {
    let tw = await searchTweets(`/tweet`, '/hashtag/fantacitorio', `/date/${formatDate()}`);
    let final = [];
    for (let t of tw) {
      if (t.media != null && t.media[0] != null && t.media[0].width == 1024 && t.media[0].height == 512) {
        final.push(t)
      }
    }
    console.log(final)
    setSquadre(final);
  }

  useEffect(() => {
    trovaPunti();
    trovaSquadre();
  }, [])

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="700"
      className="min-h-full px-5 dark:bg-gray-900 pt-1"
    >
      <div className='flex flex-col justify-center text-white'>
        <div className="text-center">
          <div className='text-5xl text-center pt-10'>Classifica <b>Fantacitorio</b></div>
          <div className='text-3xl text-center mt-2 pb-5'><i>dell'ultima settimana</i></div>
        </div>
        <div className="text-center flex justify-center p-5">
          <table class="text-sm text-left text-gray-500 dark:text-gray-300" width="700">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="py-3 px-6">#</th>
                <th scope="col" class="py-3 px-6">Politico</th>
                <th scope="col" class="py-3 px-6">Punteggio</th>
              </tr>
            </thead>
            <tbody>
              {punteggi.map((p) => {
                return (
                  <tr key={p.position} class="bg-white border-b bg-white bg-slate-800 dark:border-gray-700">
                    <th scope="row" class="py-4 px-6 font-medium text-gray whitespace-nowrap dark:text-white">
                      {p.position}
                    </th>
                    <td class="py-4 px-6">{p.name}</td>
                    <td class="py-4 px-6">{p.score}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className="text-center">
          <h3 className='text-3xl text-center pt-20 pb-5'>Squadre registrate</h3>
        </div>
        <div className="box-border m-auto max-w-[75rem] 3xl:max-w-[120rem] columns-1xs sm:columns-2xs md:columns-2">
          {squadre?.map((tweet) => <TweetCard data={tweet} key={tweet.id} />)}
        </div>
      </div>
    </div>
  )
}

export default Fantacitorio