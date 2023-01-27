import CategoryItem from './CategoryItem'
import '../App.css'
export default function CategoryList({ categories = [] }) {
  return (
    <div className="list">
      {categories.map((item) => (
        <CategoryItem key={item.idCategory} {...item} />
      ))}
    </div>
  )
}
