import { SearchGame } from './SearchGame/SearchGame'
import PropTypes from 'prop-types'
import './Panel.css'
import { PlatformSection } from './PlatformSection/PlatformSection'

export const Panel = ({ setGameToShow }) => {
  return (
    <div className="panel_container">
      <ol>
        <li>
          <p> <span>01.</span> Choose platform</p>
          <PlatformSection />
        </li>
        <li>
          <p> <span>02.</span> Searching Game</p>
          <SearchGame setGameToShow={ setGameToShow } />
        </li>
      </ol>
    </div>
  )
}

Panel.propTypes = {
  setGameToShow: PropTypes.func
}