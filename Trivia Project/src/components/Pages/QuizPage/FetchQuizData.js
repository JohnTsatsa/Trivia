import { useEffect, useState } from 'react';
import axios from 'axios'; // for API
import shuffle from 'lodash.shuffle'; // for shuffling the answers
import { useNavigate } from 'react-router-dom';

function FetchQuizData(id, difficulty, questionsNumber) {
  const [quizData, setQuizData] = useState([]);
  const navigate = useNavigate();

  async function fetchData() {
    try {
      const response = await axios.get(
        `https://opentdb.com/api.php?amount=${questionsNumber}&category=${id}&difficulty=${difficulty}&type=multiple`
      );

      // this function gets the data of the quiz as input
      // covert quizData into a new one with an addition property named answers but shuffled
      // how to make shuffledAnswers: store to a constant all the answers
      // use shuffle function that imported
      function shuffleAnswers(quizData) {
        return quizData.map((quizItem) => {
          const allAnswers = [...quizItem.incorrect_answers, quizItem.correct_answer];
          const shuffledAnswers = shuffle(allAnswers);
          return { ...quizItem, answers: shuffledAnswers };
        });
      }

      // take the results data we got from axios and use it as input to the shuffleAnswers
      // the result of the function store it to quizData
      const shuffledQuizData = shuffleAnswers(response.data.results);
      setQuizData(shuffledQuizData);
      // check if there is data in the array after 2 seconds lead the user to another url
      setTimeout(() => {
        if (shuffledQuizData.length === 0) {
          navigate('/'); // we could make an error page to navigate in order to display "no questions data"
        }
      }, 2000);
    } catch (error) {
      alert('an error occured while bringing quiz data.');
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  return quizData;
}

export default FetchQuizData;
