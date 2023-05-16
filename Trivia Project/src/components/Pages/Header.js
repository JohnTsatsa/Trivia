
// the header content is going to be according to className
// we start with "active" className
// after 2.9sec,remove the active class and take the page to the top

import React, { useState, useEffect } from 'react'

export default function Header() {
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsActive(false)
      // Scroll to the top of the page
      window.scrollTo(0, 0)
    }, 2950)
  }, [])


  // change the heading content  dpending on the class
  return (
    <div className={`header-section ${isActive ? 'active' : ''}`}>
      {isActive ? (
        <h1>
          <span>welcome to my</span>Trivia</h1>) :
        (
          <h1>Categories</h1>
        )}
    </div>
  )
}
