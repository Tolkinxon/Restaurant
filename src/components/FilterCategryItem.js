import { Link } from 'react-router-dom'
import '../App.css'
export default function FilterCategoryItem({ strMealThumb,  strMeal}) {
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
    </div>
  )
}
