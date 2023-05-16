import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import '../Styles/ResultsPage.css'

function ResultPage() {
  const navigate = useNavigate()
  const location = useLocation()
  // getting the parametres we want from the url
  const correctAnswersCount = new URLSearchParams(location.search).get('correctAnswersCount')
  const questionsNumber = new URLSearchParams(location.search).get('questionsNumber')
  const imageUrl = new URLSearchParams(location.search).get('imageUrl')

  const percentageCorrectAnswers = (correctAnswersCount / questionsNumber) * 100

  // message content according to the percentage of correct answers
  let message = ''
  if (percentageCorrectAnswers <= 40) {
    message = 'Answering randomly will not get you anywhere'
  } else if (percentageCorrectAnswers >= 80) {
    message = 'Outstanding!!! Seems you were actually reading the questions'
  } else {
    message = 'Good job! You are almost there!'
  }

  // display a message where if the number of correct answers is 1 display "correct answer" instead of "correct answers"
  // then display the message according to percentageCorrectAnswers
  return (
    <div className="result-page" style={{ backgroundImage: `url(${imageUrl})` }}>
      <h1>You got {correctAnswersCount} correct answer{correctAnswersCount === '1' ? '' : 's'} out of {questionsNumber}</h1>
      <h2>{message}</h2>
      <button onClick={() => navigate('/')} >Play Again</button>
    </div>
  )
}
export default ResultPage
