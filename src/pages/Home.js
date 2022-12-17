import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Clousure from '../components/Clousure';
import About from '../components/About';
import Artist from '../components/Artist';
import Footer from "../components/Footer"

function Home() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Clousure/>
      <About/>
      <Artist/>
      <Footer/>
    </div>
  )
}

export default Home
