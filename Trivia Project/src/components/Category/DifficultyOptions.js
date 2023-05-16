import React from 'react'

function DifficultyOptions(props) {
  const { difficulty, setDifficulty } = props

  // make a list of the options
  // checks the value of each option with the difficulty
  // give the class "selected" accorging to which one equals to difficulty
  return (
    <>
      <h3 className='options-title'>Choose Difficulty</h3>
      <ul className="difficulty-options">
        <li className={`difficulty-option ${difficulty === 'easy' ? 'selected' : ''}`} onClick={() => setDifficulty("easy")}>Easy</li>
        <li className={`difficulty-option ${difficulty === 'medium' ? 'selected' : ''}`} onClick={() => setDifficulty("medium")}>Medium</li>
        <li className={`difficulty-option ${difficulty === 'hard' ? 'selected' : ''}`} onClick={() => setDifficulty("hard")}>Hard</li>
      </ul>
    </>
  )
}

export default DifficultyOptions
