import React from 'react'
import { NavLink } from 'react-router-dom'

const activeLink = {
    color: 'black',
    fontWeight: 'bold'
}

export default function Nav() {
  return (
    <div>
      <nav>
        <NavLink activeStyle={activeLink} exact to="/"> Home </NavLink>
        <NavLink activeStyle={activeLink} to="/about"> About </NavLink>
        <NavLink activeStyle={activeLink} to="/contact"> Contact </NavLink>
      </nav>
    </div>
  )
}
