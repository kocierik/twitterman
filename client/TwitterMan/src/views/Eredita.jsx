import React, {useState} from 'react'
import { useEffect } from 'react';
import { PieChart, Pie, Cell} from 'recharts'
import { searchTweets } from '../utils'


const Eredita = ()=>{

    async function getQuizzettone(){
        let today = new Date();
        let todayString = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()-7}`
        let tw = await searchTweets(`/tweet/user/{0}`, 'quizzettone', `/date/${todayString}T00:00:00.000Z/${today.toISOString()}`);
        for(let t of tw){
            console.log(t.content);
        }
    }

    useEffect(()=>{
        getQuizzettone();
    }, [])

    const [dailyword, setDailyword] = useState(null);
    const stats = [{name:"giusti",value:10}, {name:"sbagliati", value:50}];
    const cx = 180;
    const cy = 150;
    const COLORS = ['#00C49F', '#FF8042'];
    const renderLabel = ({
        x, y, name, value
      }) => {
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${name} (${value})`}
            </text>
        );
      };
    return(
        <div className='flex flex-col justify-center text-white'>
            <div className="text-center">
                <h1 className='text-5xl text-center pt-20 pb-5'>Parola del giorno:</h1>
                <p className='bold text-2xl'>PAROLA</p>
            </div>
            <div className="text-center flex justify-center p-5">
                <table>
                    <tbody>
                        <tr>
                            <td className='p-3'>1</td>
                            <td className='p-3'>gianni</td>
                            <td className='p-3'>10:58</td>
                            <td className='p-3'><a href="#">http://lol</a></td>
                        </tr>
                        <tr>
                            <td className='p-3'>2</td>
                            <td className='p-3'>mario</td>
                            <td className='p-3'>11:43</td>
                            <td className='p-3'><a href="#">http://lol2</a></td>
                        </tr>
                        <tr>
                            <td className='p-3'>3</td>
                            <td className='p-3'>mandolfo</td>
                            <td className='p-3'>12:33</td>
                            <td className='p-3'><a href="#">http://lol3</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='text-center flex justify-center p-5'>
                <PieChart width={350} height={500}>
                    <Pie label={renderLabel} data={stats} cx={cx} cy={cy} outerRadius={80} innerRadius={60}>
                        {
                            stats.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))
                        }
                    </Pie>
                </PieChart>
            </div>
        </div>
    )
}

export default Eredita