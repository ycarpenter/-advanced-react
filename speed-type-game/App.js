import React, { useState, useEffect } from "react"

/**
  * Challenge: build the basic structure of our game
  * 
  * 1. <h1> title at the top
  * 2. <textarea> for the box to type in 
  *      (tip: React normalizes <textarea /> to be more like <input />, 
  *      so it can be used as a self-closing element and uses the `value` property
  *      to set its contents)
  * 3. <h4> ti display the amount of time remaining
  * 4. <button> to start the game
  * 5. Another <h1> to display the word count
  */

function App() {
  /**
 * Challenge: Using hooks, track the state of the text in the textarea on every keystroke
 * To verify it's working, you could just console.log the state on every change
 * 
 * https://scrimba.com/p/p7P5Hd/cW8Jdfy
 */

  const [text, setText] = useState('');
  const [count, setCount] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(5);
  const [start, setStart] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target
    setText(value)
  }

  const calculateWord = (value) => {
    const wordArr = value.trim().split(' ')
    setCount(wordArr.filter(word => word !== '').length)
  }

  function handleClick(text) {
    calculateWord(text)
    setTimeRemaining(prevState => prevState - 1)
    setStart(prevState => !prevState);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      (start && timeRemaining > 0) ? setTimeRemaining(prevState => prevState - 1) : 0
    }, 1000)
    return () => clearTimeout(timer)
  }, [timeRemaining])

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        onChange={ handleChange }
        value={ text }
      />
      <h4>Time remaining: { timeRemaining }</h4>
      <button
        onClick={ () => calculateWord(text) }
      >Start</button>
      <h1>Word count: { count }</h1>
    </div>
  )
}

export default App
