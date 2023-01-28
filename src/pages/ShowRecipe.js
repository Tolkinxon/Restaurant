import { useParams, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getMealById } from '../api'
import Loader from '../components/Loader'
import '../App.css'

export default function ShowRecipe() {
  const { id } = useParams()
  const { goBack } = useHistory()
  console.log(id)
  const [meal, setMeal] = useState([])

  useEffect(() => {
    getMealById(id).then((data) => {
      setMeal(data.meals[0])
    })
  }, [])

  const { strMeal, strCategory, strArea, strInstructions, strMealThumb } = meal

  //  console.log(Object.key(meal))

  return (
    <div className="list-wrapper">
      {meal.idMeal ? (
        <div>
          <div>
            <button className="btn button" onClick={goBack}>
              Back
            </button>
          </div>
          <img src={strMealThumb} className="img" alt={strMeal} />
          <h5>
            <b>Name of meal:</b> {strMeal}
          </h5>
          <h5>
            <b>Area of meal:</b> {strArea}
          </h5>
          <h5>
            <b>Category of meal:</b> {strCategory}
          </h5>
          <p>{strInstructions}</p>
          <table className="striped">
            <thead>
              <tr>
                <th>Meal</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {
                <tr>
                  <td>hello</td>
                  <td>world</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  )
}
