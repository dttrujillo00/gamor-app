import PropTypes from 'prop-types'
import './FeaturedGame.css'

export const FeaturedGame = ({ featuredGame }) => {

  console.log(featuredGame)

  return (
    <div className="featured_container">
      <p>{featuredGame.name}</p>
      <img src={ featuredGame.image } alt={`Image of ${featuredGame.name}`} />
    </div>
  )
}

FeaturedGame.propTypes = {
  featuredGame: PropTypes.object.isRequired
}