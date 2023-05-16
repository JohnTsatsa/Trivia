import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import DifficultyOptions from './DifficultyOptions'
import QuantityOptions from './QuantityOptions'

import '../Styles/Category.css'


function Category(props) {
  // initialize the values of difficulty and number of questions 
  const [difficulty, setDifficulty] = useState('easy')
  const [questionsNumber, setQuestionsNumber] = useState('5')
  const [isActive, setIsActive] = useState(false)

  const handleMouseEnter = () => {
    setIsActive(true)
  }

  const handleMouseLeave = () => {
    setIsActive(false)
  }
// change the class whenever the mouse enters or leaves the category area
// append the card component using props to display data
  return (
    <div className="container">
      <div className={`category-card ${isActive ? 'active' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="category-card-left" >
          <img src={props.image} />
          <h2 className="category-title">{props.title}</h2>
        </div>
        <div className={`category-card-right `}>
          <DifficultyOptions difficulty={difficulty} setDifficulty={setDifficulty} />  {/* giving props */}
          <QuantityOptions questionsNumber={questionsNumber} setQuestionsNumber={setQuestionsNumber} />  {/* giving props */}
          <Link to={`/quiz/${props.id}/${difficulty}/${questionsNumber}?image=${props.image}`}>
            <button className='start-button'>Start</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Category
