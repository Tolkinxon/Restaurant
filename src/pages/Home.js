import { useState, useEffect } from 'react'
import { getAllCategories } from '../api'

import CategoryList from '../components/CategoryList'
import Loader from '../components/Loader'
import '../App.css'

export default function Home() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getAllCategories().then((data) => {
      setCategories(data.categories)
    })
  }, [])
  console.log(categories)

  return (
    <div className="list-wrapper">
      {categories.length > 0 ? (
        <CategoryList categories={categories} />
      ) : (
        <Loader />
      )}
    </div>
  )
}
