import { Link } from 'react-router-dom'
import '../App.css'
export default function FilterCategoryItem({idMeal, strMealThumb,  strMeal}) {
  return (
    <div className="card ">
      <div className="card-image">
        <img src={strMealThumb} />
      </div>
      <div className="card-content">
        <h1 className="card-title">
          <b>{strMeal}</b>
        </h1>
      </div>
      <Link to={`/recipe/${idMeal}`} className="btn more">
        Show Receipe
      </Link>
    </div>
  )
}
