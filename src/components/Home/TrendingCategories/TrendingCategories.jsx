import { useFetchCategories } from '../../../hooks/useFetchCategories'
import { Category } from './Category/Category'
import './TrendingCategories.css'

export const TrendingCategories = () => {

    const { categories, isLoading } = useFetchCategories()

    console.log(categories)

  return (
    <section className='trendingCategories_container'>
        <h2>Trending Categories</h2>

        <div className="categories_list">
            {
                isLoading ? ( <p className="loading_text">Loading categories...</p> ) : (
                    categories.map( (category, index) => {
                        return (
                            <Category key={ category.id } name={ category.name } index={ index + 1 } image={ category.image_background } />
                        )
                    } )
                )
            }
        </div>
    </section>
  )
}
