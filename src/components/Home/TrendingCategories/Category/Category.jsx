import PropTypes from 'prop-types'
import './Category.css'
import { useState } from 'react';

export const Category = ({ name, index, image }) => {

    const defaultClassName = 'category_container'

    const [categoryContainerClass, setCategoryContainerClass] = useState(defaultClassName)
    const [imageBackground, setImageBackground] = useState('')

    const onHoverCategory = () => {
        setCategoryContainerClass(defaultClassName + ' hover');
        setImageBackground(image)
    }

    const onLeaveCategory = () => {
        setCategoryContainerClass(defaultClassName);
        setImageBackground('')
    }

  return (
    <div onMouseEnter={ onHoverCategory } onMouseLeave={ onLeaveCategory } className={ categoryContainerClass } style={ {backgroundImage: `url('${imageBackground}')` }}>
        <p className='index_category'>
            { index }
        </p>
        <p className='name_category'>
            { name } { (name.includes('Games')) ? '' : 'Games' }
        </p>
        <i className="bx bx-right-arrow-alt bx-sm"></i>
    </div>
  )
}

Category.propTypes = {
    name: PropTypes.string.isRequired,
    index: PropTypes.number,
    image: PropTypes.string,
}