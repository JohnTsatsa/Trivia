import React, { useState } from 'react'

import Header from './Header'
import Category from '../Category/Category'

import { categoriesData } from '../Category/CategoriesData'
import '../Styles/MainPage.css'

export default function MainPage() {
  const [existingCategories, setExisitingCategories] = useState(categoriesData)

  // generates a number between 9 and 32 and store iy to a variable
  // checks if that number exists already in our "categoriesData" array
  // if already exists,store the the variable another number
  // hide the category button and return the value of variable

  const generateId = () => {
    let newId
    do {
      newId = Math.floor(Math.random() * 24) + 9  // generates a random number between 9 and 32 )
    } while (existingCategories.find(category => category.id === newId))

    const button = document.querySelector('.add-category-button')
    button.style.display = "none"

    return newId
  }
  // adds a new category in the existingCategories array 
  // the new category will get an id from the id generator,and image and a title
  // we make an array with expanded items of existingCategories array and the new category
  const addCategory = () => {
    const newCategory = {
      id: generateId(),
      image: "https://images.unsplash.com/photo-1665789318391-6057c533005e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      title: "Random"
    }
    setExisitingCategories([...existingCategories, newCategory])
  }


  return (
    <div>
      <Header />
      {existingCategories.map(category => (
        <Category
          key={category.id}
          id={category.id}
          image={category.image}
          title={category.title}
        />
      ))}
      <button onClick={addCategory} className="add-category-button">Add Category</button>
    </div>
  )
}
