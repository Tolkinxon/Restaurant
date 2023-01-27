import { Link } from 'react-router-dom'
import '../App.css'
export default function CategoryItem({
  idCategory,
  strCategoryThumb,
  strCategory,
  strCategoryDescription,
}) {
  return (
    <div className="card ">
      <div className="card-image">
        <img src={strCategoryThumb} />
      </div>
      <div className="card-content">
        <h1 className="card-title">
          <b>{strCategory}</b>
        </h1>
        <p>{strCategoryDescription.slice(0, 70)}...</p>
      </div>
      <Link to={`/filter/${strCategory}`} className="btn more">
        More
      </Link>
    </div>
  )
}
