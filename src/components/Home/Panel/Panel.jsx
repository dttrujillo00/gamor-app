import { GameList } from './GameList/GameList'
import './Panel.css'
import { SearchGame } from './SearchGame/SearchGame'

export const Panel = () => {
  return (
    <div className="panel_container">
      <ol>
        <li>
          Searching Game
          <SearchGame />
        </li>
      </ol>
    </div>
  )
}
