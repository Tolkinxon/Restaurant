import FilterCategoryItem from './FilterCategryItem'
import '../App.css'
export default function FilterCategoryList({ meals = [] }) {
  return (
    <div className="list">
      {meals.map((item) => (
        <FilterCategoryItem key={item.idMeal} {...item} />
      ))}
    </div>
  )
}
