import React from 'react'
import './Logo.css'
import logo from '../../assets/images/logo.png'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
  <aside className='logo'>
    <a href="/" className="logo">
      <img src={logo} alt="Logo" />
    </a>
  </aside>