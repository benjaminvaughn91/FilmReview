import React from 'react'
import HomePage from './pages/HomePage'
import MovieDetailsPage from './pages/MovieDetailsPage'
import ReviewDetailsPage from './pages/ReviewDetailsPage'
import BrowseReviewsPage from './pages/BrowseReviewsPage'
import AboutPage from './pages/AboutPage'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { Switch, Route, useRouteMatch } from "react-router-dom"

const App = () => {

  const match = useRouteMatch('/detail/:id')
  let movieId = match 
    ? match.params.id
    : 0

  const reviewMatch = useRouteMatch('/review/:id')
  let reviewId = reviewMatch 
    ? reviewMatch.params.id
    : 0

  return(
  <div>
   <Header/>
    <Switch>
      <Route path="/detail/:id">
        <MovieDetailsPage id={movieId}/>
      </Route>
      <Route path="/review/:id">
        <ReviewDetailsPage id={reviewId}/>
      </Route>
      <Route path="/browse/reviews">
        <BrowseReviewsPage />
      </Route>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
    <Footer/>
  </div>
  )
}
export default App