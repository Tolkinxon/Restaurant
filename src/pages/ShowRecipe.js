import { useParams, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getMealById } from '../api'
import Loader from '../components/Loader'
import '../App.css'

export default function ShowRecipe() {
  const { id } = useParams()
  const { goBack } = useHistory()
  // console.log(id)
  const [meal, setMeal] = useState([])
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    getMealById(id).then((data) => {
      setMeal(data.meals[0])
    })
  }, [])

  console.log(meal)

  const {
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
    strYoutube,
  } = meal

  const colum = (string) => {
    const colum1 = Object.keys(meal).filter((item) =>
      item.toLowerCase().includes(string),
    )
    const coum2 = colum1.filter((item) => meal[item].length > 0)
    return coum2
  }

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
          <button className="btn" onClick={() => setToggle(!toggle)}>
            hide
          </button>{' '}
          <br />
          <br />
          {toggle && (
            <table className="striped">
              <thead>
                <tr>
                  <th>ingredient</th>
                  <th>measure</th>
                </tr>
              </thead>
              <tbody>
                {colum('ingredient').map((item, idx) => (
                  <>
                    <tr>
                      <td>{meal[item]}</td>
                      <td>{meal[colum('measure')[idx]]}</td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          )}
          {meal.strYoutube ? (
            <>
              {' '}
              <iframe
                width="400"
                height="200"
                src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`}
                allowfullscreen
              />{' '}
            </>
          ) : null}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  )
}
