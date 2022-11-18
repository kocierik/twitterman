import React from 'react'
import ReactWordcloud from 'react-wordcloud'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale.css'

const WordCloud = ({ contentData }) => {
  const callbacks = {
    getWordTooltip: (word) =>
      `The word "${word.text}" appears ${word.value} times.`,
  }

  return (
    <div>
      <div>
        <ReactWordcloud words={getOccurencesFromTweets(contentData)} callbacks={callbacks} options={{ fontSizes: [20, 50] }} />
      </div>
    </div>
  )
}

function getOccurencesFromTweets(contentData) {
  let wordsOccurences = new Map() //  { word: occurences, ... }
  contentData.forEach(
    (content) => getFormattedWordsList(content.trim()).forEach(
      (word) => wordsOccurences.set(word, 1 + (wordsOccurences.get(word) || 0)))
  )

  let words = []  // { [text: 'told', value: 64], ... }
  words = Array.from(wordsOccurences, ([word, value]) => {
    return { text: word, value: value };
  });

  return words
}

function getFormattedWordsList(content) {
  // Formattazione della lista di parole tramite regex
  return content.replace(/\n|\r|(\. )|,|(' )|(: )|\?|\!/g, ' ').split(' ').filter((word) => word !== '')
}

export default WordCloud
