import React from 'react'

function QuantityOptions(props) {
  const { questionsNumber, setQuestionsNumber } = props
  
  // make a list of the options
  // checks the value of each option with the questionNumber
  // give the class "selected" accorging to which one equals to quetionsNumber
  return (
    <>
      <h3 className='options-title'>Number of Questions</h3>
      <ul className="quantity-options">
        <li className={`quantity-option ${questionsNumber === '5' ? 'selected' : ''}`} onClick={() => setQuestionsNumber("5")}>5</li>
        <li className={`quantity-option ${questionsNumber === '10' ? 'selected' : ''}`} onClick={() => setQuestionsNumber("10")}>10</li>
        <li className={`quantity-option ${questionsNumber === '15' ? 'selected' : ''}`} onClick={() => setQuestionsNumber("15")}>15</li>
      </ul>
    </>
  )
}

export default QuantityOptions
