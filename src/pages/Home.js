import React from 'react';
import Clousure from '../components/Clousure';
import About from '../components/About';
import Artist from '../components/Artist';
import Footer from "../components/Footer"

function Home() {
  return (
    <div>
      <Clousure/>
      <About/>
      <Artist/>
      <Footer/>
    </div>
  )
}

export default Home
