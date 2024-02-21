import React from 'react'
import { render } from 'react-dom'
import Teams from './components/teams'
import App from './components/navbar'
import Footer from './components/footer'
import Header from './components/header'
 
const teamDOM = document.getElementById('team')
if (teamDOM !== null) render(<Teams />, teamDOM)

const navbarDOM = document.getElementById('navbar')
if (navbarDOM !== null) render(<App />, navbarDOM)

const footerDOM = document.getElementById('footer')
if (footerDOM !== null) render(<Footer />, footerDOM)

const headerDOM = document.getElementById('header')
if (headerDOM !== null) render(<Header />, headerDOM)