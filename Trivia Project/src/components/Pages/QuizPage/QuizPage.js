import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import he from 'he';
import FetchQuizData from './FetchQuizData';

import '../../Styles/QuizPage.css';


function QuizPage() {
  const { id, difficulty, questionsNumber } = useParams();  // extract values from URL
  const location = useLocation(); // in order to access and use the current url to extract query parameters
  const navigate = useNavigate();  // for navigating to results page
  const imageUrl = new URLSearchParams(location.search).get('image');  // get the query string of the url
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  let [isCorrect, setIsCorrect] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  const quizData = FetchQuizData(id, difficulty, questionsNumber);

  //?   ========      when the user gives an answer   ===========  //
  function handleAnswerClick(selectedAnswer) {
    // Check if the selected answer is the correct one
    // raise flags "isCorrect" and "isAnswered"
    isCorrect = selectedAnswer === quizData[currentQuestionIndex].correct_answer;
    setIsCorrect(isCorrect);
    setIsAnswered(true);

    // deactivate all the answers (protect our app from crazy users)
    // for the answer we selected,if we have found the correct answer (flag raised),
    // add 1 to the counter of corrects answers
    // or else turn red the answer you pressed
    const answerElements = document.querySelectorAll('.answer');
    answerElements.forEach((element) => {
      element.classList.add('deactivate')
      ///    if you dont put the first condition,turns all the wrongs answers to red
      if (element.textContent === selectedAnswer) {
        if (isCorrect) {
          setCorrectAnswersCount(correctAnswersCount + 1);
        } else {
          element.classList.add('wrong');
        }
      }
      // wait 1.5sec for the user to check the correct answer
      // after 1.5sec we increase currentQuestionIndex to bring the new question, remove the classes and lower the flags (getting ready for next question)

      // Important!!! we need first to check if we are at the last question so we can update the number of correct answers
      // if we dont do that,when we answer 5 of 5 we ll get a message "you answered 4 of 5"
      // then transfer the user to the dynamic url of results page
      setTimeout(() => {
        if (currentQuestionIndex === quizData.length - 1) {
          // Update the correctAnswersCount state first
          console.log(correctAnswersCount)
          // Use the updated value to navigate to the results page
          // fix the whole url to use its values in results page
          navigate(`/results?correctAnswersCount=${correctAnswersCount + (isCorrect ? 1 : 0)}&questionsNumber=${questionsNumber}&imageUrl=${encodeURIComponent(imageUrl)}`);
        }

        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setIsAnswered(false);
        setIsCorrect(false);
        element.classList.remove('wrong');
        element.classList.remove('deactivate')
      }, 1500);
    });
  }

  // we need a function that is called whenever quizData change (loads the data) and whenever an answer selected
  // check if we have any data
  // make a new array calling it answers
  // this new array will take each answer from quiz item
  // add to them className "answer"
  // if has given an answer,add className to the one is correct 
  // put each answer decoded between "li"s
  // put to answers variable the array that created

  useEffect(() => {
    if (quizData.length) {
      const quizItem = quizData[currentQuestionIndex];
      // console.log(quizItem.correct_answer)  //!  ---  for cheating   ----  //
      const answers = quizItem.answers.map((answer, answerIndex) => {
        let className = 'answer';
        ///    if you dont put the first condition,the correct answer will be green when the question loads
        if (isAnswered) {
          if (answer === quizItem.correct_answer) {
            className += ' deactivate correct';
          }
        }

        return (
          <li key={answerIndex} onClick={() => handleAnswerClick(answer)} className={className} >{he.decode(answer)}</li>
        );
      });
      setAnswers(answers);
    }
  }, [quizData, isAnswered]);

  // put the according background-image
  // if there is content in the quizData
  // show the question decoded 
  // show the ul with the list of answers
  return (
    <div className="quiz-card" style={{ backgroundImage: `url(${imageUrl})` }}>
      {quizData.length > 0 && (
        <div>
          <h3 className="question">{he.decode(quizData[currentQuestionIndex].question)}</h3>
          <ul className="answers-section">{answers}</ul>
        </div>
      )}
    </div>
  );
}

export default QuizPage;