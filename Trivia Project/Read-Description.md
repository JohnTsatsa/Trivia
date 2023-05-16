The project is seperates to the following components

* Category: 
    -- CategoriesData: it contains an array of the categories that used as demo for the project
    
    -- Category: contains the appending JSX for the category card.The parts of the card that is related to difficulty and quantity are seperated tin other "js" files.

    -- DifficultyOptions - QuantityOptions: contains the options and the function that handles the option selection


* Pages:
    -- Header: is the animation of the heading. the return of js is used by MainPage

    -- MainPage: it contains whatever you see in the main page (heading, categories, category-button).Also has the function that helps to bring a new random category

    -- QuizPage: 
        --- FetchQuizData: responsible for API request (success, failure, delays)
        --- QuizPage: contains the UI with the question and the anwers. Also the functions that are responsible when the user selects an answer (dislaying correct-wrong answer, moving to the next question, count the correct answers, transfering to resultsPage)

    -- ResultsPage: contains the dynamic messages and a button to start over

* App.js: contains the url for each page

