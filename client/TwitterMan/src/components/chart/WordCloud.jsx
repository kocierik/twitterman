import React from 'react'
import ReactWordcloud from 'react-wordcloud'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale.css'
import words from '../../json/worlds'

const WordCloud = () => {
  const callbacks = {
    getWordTooltip: (word) =>
      `The word "${word.text}" appears ${word.value} times.`,
  }

  return (
    <div>
      <div>
        <ReactWordcloud words={words} callbacks={callbacks} />
      </div>
    </div>
  )
}

export default WordCloud
