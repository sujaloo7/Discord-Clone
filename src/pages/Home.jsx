import React from 'react'
import Closer from '../components/Closer'
import Discordconnect from '../components/Discordconnect'
import Discordfandom from '../components/Discordfandom'
import Discordinvite from '../components/Discordinvite'
import Download from '../components/Download'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

import Navbars from '../components/Navbars'

const Home = () => {
  return (
    
   <>
   <Navbars/>
  <Hero/>
  <Discordinvite/>
  <Discordconnect/>
  <Discordfandom/>
  <Closer/>
  <Download/>
  <Footer/>
 
   </>
  )
}

export default Home