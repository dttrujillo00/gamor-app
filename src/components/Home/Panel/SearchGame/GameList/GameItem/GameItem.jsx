import PropTypes from 'prop-types'
import './GameItem.css'

export const GameItem = ({ name, image, platforms, setGameToShow }) => {

  const updateFeaturedGame = () => {
    setGameToShow({
      name,
      image,
      platforms
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
  platforms: PropTypes.array.isRequired,
  setGameToShow: PropTypes.func.isRequired
}