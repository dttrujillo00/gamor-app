import { SignUpSignIn } from '../../Header/SignUpSignIn/SignUpSignIn'
import './Hero.css'

export const Hero = () => {
  return (
    <div className='hero_container'>
      <div className="hero">
        <div className="hero_title">
            <span>start</span>
            <span className='ellipse_decorator orange orange_color'>streaming</span>
            <span className='ellipse_decorator orange'>games</span>
            <span className='ellipse_decorator orange'>differently</span>
        </div>

        <div className="hero_subtitle">
          <p>gamor now has <span>stream party</span>  platform</p>
        </div>

        <SignUpSignIn order={'reverse'} />
      </div>
    </div>
  )
}
