import { useState } from 'react'
import Hero from './Components/hero'
import Tour from './Components/Tour'
import Explore from './Components/explore'
import Destination from './Components/Destination/Destination'
import Works from './Components/Works'
import ExploreHero from './Components/Footer'

function App() {


  return (
    <>
     <Hero/>
     <Tour/>
     <Explore/>
     <Destination/>
     <Works/>
     <ExploreHero/>
    </>
  )
}

export default App
