import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'

import MainPage from './components/Pages/MainPage'
import QuizPage from './components/Pages/QuizPage/QuizPage'
import ResultsPage from './components/Pages/ResultsPage'

import './components/Styles/General.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<MainPage />} />
        <Route exact path='/quiz/:id/:difficulty/:questionsNumber' element={<QuizPage />} />
        <Route exact path='/results' element={<ResultsPage />} />
      </Routes>
    </Router >
  )
}
export default App
