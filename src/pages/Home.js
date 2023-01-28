import { useState, useEffect } from 'react'
import { getAllCategories } from '../api'
import { useLocation, useHistory } from 'react-router-dom'

import CategoryList from '../components/CategoryList'
import Loader from '../components/Loader'
import Search from '../components/Search'
import '../App.css'

export default function Home() {
  const { push } = useHistory()
  const { pathname, search } = useLocation()

  const his = useHistory()
  const loc = useLocation()

  console.log(his)
  console.log(loc)

  const handleSearch = (str) => {
    setSearching(
      categories.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase()),
      ),
    )
    push({ pathname, search: `?search=${str}` })
  }

  const [categories, setCategories] = useState([])
  const [searching, setSearching] = useState([])

  useEffect(() => {
    getAllCategories().then((data) => {
      setCategories(data.categories)
      setSearching(
        search
          ? data.categories.filter((item) => 
              item.strCategory
                .toLowerCase()
                .includes(search.split('=')[1].toLowerCase())
              ): data.categories,
          
      )
    })
  }, [search])

  return (
    <div className="list-wrapper">
      <Search cb={handleSearch} />
      {categories.length > 0 ? (
        <CategoryList categories={searching} />
      ) : (
        <Loader />
      )}
    </div>
  )
}
