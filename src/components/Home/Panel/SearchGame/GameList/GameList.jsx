import { useFetchGames } from "../../../../../hooks/useFetchGames"
import { GameItem } from "./GameItem/GameItem"
import PropTypes from 'prop-types'
import './GameList.css'

export const GameList = ({ searchedGame = '', setGameToShow }) => {

    const { games, isLoading } = useFetchGames(searchedGame)
    
    return (
        <div className="gameList_container">
            {
                isLoading ? ( <p className="loading_text">Loading games...</p> ) : (
                    <ol>
                        {
                            games.map( game => {
                                return (
                                    <li key={ game.id }>
                                        <GameItem name={ game.name } image={ game.imageURL } platforms={ game.platforms } setGameToShow={ setGameToShow } />
                                    </li>
                                )
                            } )
                        }
                    </ol>
                )
            }
        </div>
    )
}

GameList.propTypes = {
    searchedGame: PropTypes.string.isRequired,
    setGameToShow: PropTypes.func

}