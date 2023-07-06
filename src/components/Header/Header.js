import React, { Component } from 'react'
import forrest from './img/forrest_gump.webp';
import './Header.css'

export class Header extends Component {
  render() {
    return (
      <>
      <header>
      <nav>
        <ul className='nav'>
          <li><a href="#story">Story</a> </li>
          <li><a href="#actors">Actors</a></li>
          <li><a href="#info">Info</a></li>
        </ul>
    </nav>
    <img src= {forrest} alt="forrest-gump" />
  </header>
      </>
    )
  }
}

export default Header