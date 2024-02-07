import { FeaturedGame } from "./FeaturedGame/FeaturedGame"
import { Hero } from "./Hero/Hero"
import { Panel } from "./Panel/Panel"

import './Home.css'


export const Home = () => {
  return (
    <div className="home_container">
      <Hero />
      <FeaturedGame />
      <Panel />
    </div>
  )
}
