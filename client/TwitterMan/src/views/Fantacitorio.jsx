import { useEffect, useState } from 'react'



function Fantacitorio() {
    const [punteggi, setPunteggi] = useState([{"score":100, "name":"giorgia meloni", "position":1}]);

    async function trovaPunti(){

    }

    useEffect(()=>{
        trovaPunti();
    }, [])

    return (
        <div className='flex flex-col justify-center text-white'>
            <div className="text-center">
                <h1 className='text-5xl text-center pt-20 pb-5'>Punteggi Fantacitorio dell'ultima settimana</h1>
            </div>
            <div className="text-center flex justify-center p-5">
                <table>
                    <thead>
                        <th className='p-3'>Posizione</th>
                        <th className='p-3'>Politico</th>
                        <th className='p-3'>Punteggio</th>
                    </thead>
                    <tbody>
                        {punteggi.map((p)=>{
                            return (
                                <tr>
                                    <td className='p-3'>{p.position}</td>
                                    <td className='p-3'>{p.score}</td>
                                    <td className='p-3'>{p.name}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Fantacitorio