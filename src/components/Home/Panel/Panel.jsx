import { SearchGame } from './SearchGame/SearchGame'
import PropTypes from 'prop-types'
import './Panel.css'
import { PlatformSection } from './PlatformSection/PlatformSection'

export const Panel = ({ setGameToShow }) => {
  return (
    <div className="panel_container">
      <ol>
        <li>
          Choose platform
          <PlatformSection />
        </li>
        <li>
          Searching Game
          <SearchGame setGameToShow={ setGameToShow } />
        </li>
      </ol>
    </div>
  )
}

Panel.propTypes = {
  setGameToShow: PropTypes.func
}