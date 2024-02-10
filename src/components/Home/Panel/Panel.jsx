import { SearchGame } from './SearchGame/SearchGame'
import PropTypes from 'prop-types'
import './Panel.css'

export const Panel = ({ setGameToShow }) => {
  return (
    <div className="panel_container">
      <ol>
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