import React, { useState } from "react"

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

  const [text, setText] = useState('')

  const handleChange = (event) => {
    const { value } = event.target
    setText(value)
  }



  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        value={ text }
        onChange={ handleChange }
      />
      <h4>Time remaining: </h4>
      <button>Start</button>
      <h1>Word count: </h1>
    </div>
  )
}

export default App


