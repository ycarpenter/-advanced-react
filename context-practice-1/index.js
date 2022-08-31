import React from "react"
import ReactDOM from "react-dom"
import UserNameContext from "./userNameContext"

import App from "./App"

/**
 * Challenge: Set up context to save the user's username and pass it to anywhere that is currently hardcoding "Username".
 * 
 * Use the static class property `contextType` on any components that need to consume context.
 */

ReactDOM.render(
  <UserNameContext.Provider value={ 'George' }>
    <App />
  </UserNameContext.Provider>,
  document.getElementById("root"))
