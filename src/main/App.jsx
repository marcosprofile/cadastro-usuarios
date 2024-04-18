import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import './App.css'

import Logo from '../components/template/logo'
import Nav from '../components/template/Nav'
import Main from '../components/template/Main'
import Footer from '../components/template/Footer'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
  <div className="app">
    <Logo />
    <Nav />
    <Main icon="home" title="Início" subtitle="Segundo projeto do capítulo de React." />
    <Footer />
  </div>