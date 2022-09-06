import React, { Component } from "react"
import UserNameContext from "./userNameContext"

const Header = (props) => {

  const userName = this.context
  return (
    <header>
      <p>Welcome, { userName }!</p>
    </header>
  )
}
export default Header
