import React from 'react'
import ReactWordcloud from 'react-wordcloud'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale.css'
import words from '../../json/worlds'

const WordCloud = () => {
  return (
    <div>
      <div>
        <ReactWordcloud words={words} />
      </div>
    </div>
  )
}

export default WordCloud
