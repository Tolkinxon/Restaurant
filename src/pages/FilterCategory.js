import { useState, useEffect } from 'react'
import { getFilterCategory } from '../api'
import { useParams } from 'react-router-dom'

import FilterCategoryList from '../components/FilterCategoryList'
import Loader from '../components/Loader'
import '../App.css'

export default function FilterCategory() {
  const [meals, setMeals] = useState([])

  const { name } = useParams()

  useEffect(() => {
    getFilterCategory(name).then((data) => {
      setMeals(data.meals)
    })
  }, [])
  // console.log(meals)

  return (
    <div className="list-wrapper">
      {meals.length > 0 ? <FilterCategoryList meals={meals} /> : <Loader />}
    </div>
  )
}
