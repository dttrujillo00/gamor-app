import './FeaturedGame.css'

export const FeaturedGame = () => {

  let image = sessionStorage.getItem('featured_image')
  let name = sessionStorage.getItem('featured_game')

  return (
    <div className="featured_container">
      <p>{name}</p>

      <img src={ image } alt="" />
    </div>
  )
}
