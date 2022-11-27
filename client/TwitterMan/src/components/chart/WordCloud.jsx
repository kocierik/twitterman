import React, { useEffect } from 'react'
import ReactWordcloud from 'react-wordcloud'

const WordCloud = ({ contentData }) => {
  useEffect(() => {
    // console.log(contentData)
  }, [])

  const callbacks = {
    getWordTooltip: (word) =>
      `The word "${word.text}" appears ${word.value} times.`,
  }

  return (
    <div>
      <ReactWordcloud words={getOccurencesFromTweets(contentData)} callbacks={callbacks} options={{ fontSizes: [20, 50] }} />
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

  return words.filter((word) => word.value > 2)
}

function getFormattedWordsList(content) {
  // Formattazione della lista di parole tramite regex
  return content.replace(/\n|\r|(\. )|,|(' )|(: )|\?|\!/g, ' ').split(' ').filter((word) => word !== '' && word.length > 3)
}

export default WordCloud
