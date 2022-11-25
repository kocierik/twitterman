import React, { PureComponent } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { PieChart, Pie, Cell, Legend } from 'recharts'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const PieGraph = ({ tweets }) => {
  const [sentimentData, SetSentimentData] = useState([]);

  const getSentiment = (tws) => {
    var data = {};

    tws.map((tw) => {
      if (data[tw.sentiment] == undefined) {
        data[tw.sentiment] = 1;
      } else {
        data[tw.sentiment] += 1;
      }
    });

    var sentimentDataReturn = [];

    for (var k in data) {
      sentimentDataReturn.push({ name: k, value: data[k] })
    };

    return sentimentDataReturn;
  }

  useEffect(() => {
    SetSentimentData(getSentiment(tweets));
  }, [])

  return (
    <PieChart width={250} height={300}>
      <Legend verticalAlign="bottom" height={36} />
      <Pie
        data={sentimentData}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        dataName="name"
        label
      >
        {sentimentData.map((entry, index) =>
          (<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
        )}
      </Pie>
    </PieChart>
  )
}

export default PieGraph
