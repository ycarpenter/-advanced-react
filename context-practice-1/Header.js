import React, { Component } from "react"
import UserNameContext from "./userNameContext"

class Header extends Component {
  static contextType = UserNameContext
  render() {
    const userName = this.context
    return (
      <header>
        <p>Welcome, { userName }!</p>
      </header>
    )
  }
}

export default Header
