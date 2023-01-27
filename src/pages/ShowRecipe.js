import { useParams, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getMealById } from '../api'
import Loader from '../components/Loader'

export default function ShowRecipe() {
  const { id } = useParams()
  const { goBack } = useHistory()
  console.log(id)
  const [meal, setMeal] = useState({})

  useEffect(() => {
    getMealById(id).then((data) => {
      setMeal(data.meals[0])
    })
  }, [])

  const { strMeal } = meal

  console.log(meal)
  console.log(strMeal)

  return(
    <div> 
     {strMeal}
    </div>
  )
}
