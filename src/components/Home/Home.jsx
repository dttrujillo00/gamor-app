import { FeaturedGame } from "./FeaturedGame/FeaturedGame"
import { Hero } from "./Hero/Hero"
import { Panel } from "./Panel/Panel"
import { useState } from "react"
import './Home.css'
import { TrendingCategories } from "./TrendingCategories/TrendingCategories"

export const Home = () => {

  localStorage.setItem('lastPath', window.location.pathname)

  const [featuredGame, setFeaturedGame] = useState({
    name: 'Fortnite Battle Royale',
    image: 'https://media.rawg.io/media/games/dcb/dcbb67f371a9a28ea38ffd73ee0f53f3.jpg',
    platforms: ['PC','PlayStation','Xbox','iOS','Android','Apple Macintosh','Nintendo']
  }) 

  return (
    <div className="home_container">
      <Hero />
      <FeaturedGame featuredGame={ featuredGame } />
      <Panel setGameToShow={ setFeaturedGame } />
      <TrendingCategories />
    </div>
  )
}
