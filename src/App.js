import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import { Route, Switch } from 'react-router-dom'
import FilterCategory from './pages/FilterCategory'
import ShowRecipe from './pages/ShowRecipe'

export default function App() {
  return (
    <div className="App">
      <Header />
      <main className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contact} />
          <Route path="/filter/:name" component={FilterCategory} />
          <Route path="/recipe/:id" component={ShowRecipe} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  )
}
