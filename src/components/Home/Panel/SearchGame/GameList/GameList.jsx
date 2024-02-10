import { useFetchGames } from "../../../../../hooks/useFetchGames"
import { GameItem } from "./GameItem.jsx/GameItem"

import './GameList.css'

export const GameList = ({ searchedGame = '' }) => {

    const { games, isLoading } = useFetchGames(searchedGame)
    
    return (
        <div className="gameList_container">
            {
                isLoading ? ( <p>Loading games, please wait</p> ) : (
                    <ol>
                        {
                            games.map( game => {
                                return (
                                    <li key={ game.id }>
                                        <GameItem name={ game.name } image={ game.imageURL } />
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
