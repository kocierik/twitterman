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

    async function trovaSquadre(){
        let tw = await searchTweets(`/tweet`, '/hashtag/fantacitorio', `/date/${formatDate()}`);
        let final = [];
        for(let t of tw){
            if(t.media != null && t.media[0]!= null && t.media[0].width == 1024 && t.media[0].height == 512){
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
        <div className='flex flex-col justify-center text-white'>
            <div className="text-center">
                <h1 className='text-5xl text-center pt-20 pb-5'>Punteggi Fantacitorio dell'ultima settimana</h1>
            </div>
            <div className="text-center flex justify-center p-5">
                <table>
                    <thead>
                        <tr>
                            <th className='p-3'>Posizione</th>
                            <th className='p-3'>Politico</th>
                            <th className='p-3'>Punteggio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {punteggi.map((p) => {
                            return (
                                <tr key={p.position}>
                                    <td className='p-3'>{p.position}</td>
                                    <td className='p-3'>{p.score}</td>
                                    <td className='p-3'>{p.name}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="text-center">
                <h3 className='text-3xl text-center pt-20 pb-5'>Squadre registrate nell'ultima settimana</h3>
            </div>
            <div className="text-center flex flex-wrap justify-center p-5 m-4">
                {squadre.map((s) => {return <TweetCard data={s} key={s.id} className="m-3 basis-3" />;})}
            </div>
        </div>
    )
}

export default Fantacitorio