import React from 'react'
import ReactWordcloud from 'react-wordcloud'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale.css'

const WordCloud = ({ tweetsData }) => {
  const callbacks = {
    getWordTooltip: (word) =>
      `The word "${word.text}" appears ${word.value} times.`,
  }

  return (
    <div>
      <div>
        <ReactWordcloud words={getOccurencesFromTweets(tweetsData)} callbacks={callbacks} />
      </div>
    </div>
  )
}

function getOccurencesFromTweets(tweetsData) {
  let wordsOccurences = new Map()
  tweetsData.forEach((tweet) => {
    tweet.content.split(' ').forEach(
      (word) => {
        var value
        if (!(value = wordsOccurences.get(word)))
          wordsOccurences.set(word, 1)
        else
          wordsOccurences.set(word, value + 1)
      })
  })

  let words = []  // { [text: 'told', value: 64], ... }
  words = Array.from(wordsOccurences, ([word, value]) => {
    return { text: word, value: value };
  });
  console.log(words)

  return words
}

export default WordCloud
