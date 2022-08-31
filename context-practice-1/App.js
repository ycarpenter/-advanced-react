import React from "react"
import UserNameContext from "./userNameContext"
import Header from "./Header"

function App() {
  return (
    <div>
      <UserNameContext.Consumer>
        { value => (
          <main>
            <p className="main">No new notifications, { value }! 🎉</p>
          </main>
        ) }
      </UserNameContext.Consumer>
      <Header />
    </div>
  )
}
export default App