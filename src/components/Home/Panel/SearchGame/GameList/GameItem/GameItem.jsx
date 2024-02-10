import PropTypes from 'prop-types'
import './GameItem.css'

export const GameItem = ({ name, image, setGameToShow }) => {

  const updateFeaturedGame = () => {
    setGameToShow({
      name,
      image
    })
  }

  return (
    <div className="gameItem">
      <p>{ name }</p>
      <i onClick={ updateFeaturedGame } className='bx bx-plus'></i>
    </div>
  );
};

GameItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  setGameToShow: PropTypes.func.isRequired
}