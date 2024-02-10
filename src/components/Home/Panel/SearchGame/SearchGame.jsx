import { useState } from "react"
import { GameList } from "./GameList/GameList";
import PropTypes from 'prop-types'
import './SearchGame.css'

export const SearchGame = ({ setGameToShow }) => {

    const [inputValue, setInputValue] = useState('')
    const [searchedGame, setSearchedGame] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        const cleanNewValue = inputValue.trim();
        if (cleanNewValue <= 1) return;
        setSearchedGame(cleanNewValue)
    }

    

  return (
    <form onSubmit={ onSubmit } >

        <div className="search_input_container">
            <input 
                type="text" 
                placeholder="Search a game"
                value={ inputValue }
                onChange={ onInputChange }
            />
            <i className="bx bx-filter-alt"></i>
        </div>

        <hr />

        <GameList searchedGame={ searchedGame } setGameToShow={ setGameToShow } />
        <button type="submit" className="search_btn">Search Now</button>
    </form>
  )
}

SearchGame.propTypes = {
    setGameToShow: PropTypes.func
}