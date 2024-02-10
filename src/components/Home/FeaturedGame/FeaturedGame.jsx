import PropTypes from 'prop-types'
import './FeaturedGame.css'
import { useEffect, useState } from 'react';

export const FeaturedGame = ({ featuredGame }) => {

  const [isLoadingImage, setIsLoadingImage] = useState(false)
  useEffect(() => {
    setIsLoadingImage(true)
  
  }, [featuredGame])
  

  const { name, image, platforms } = featuredGame;

  const onLoadImage = () => {
    setIsLoadingImage(false)
  }

  return (
    <div className="featured_container">

      <div className="featuredTitle">
        <h2>{ name }</h2>
      </div>

      <div className="featuredPlatforms">
        <h3>Ya disponible en:</h3>
        {
          platforms.map( platform => {
            return (
              <span key={ platform } className='platform'>{ platform }</span>
            )
          } )
        }
      </div>

      <div className={  isLoadingImage ? 'featuredImage loading_image' : 'featuredImage' }>
        <img onLoad={ onLoadImage } src={ image } alt={`Image of ${name}`} />
      </div>
    </div>
  )
}

FeaturedGame.propTypes = {
  featuredGame: PropTypes.object.isRequired
}