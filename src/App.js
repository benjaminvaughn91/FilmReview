import React from 'react'
import HomePage from './pages/HomePage'
import MovieDetailsPage from './pages/MovieDetailsPage'
import ReviewDetailsPage from './pages/ReviewDetailsPage'
import BrowseReviewsPage from './pages/BrowseReviewsPage'
import AboutPage from './pages/AboutPage'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { 
  Switch, Route, useRouteMatch, useHistory
} from "react-router-dom"

const App = () => {
  
  const history = useHistory()

  const goToMovie = (id) => {
    history.push(`/detail/${id}`)
    window.scrollTo(0, 0);
  }
  const goToReview = (id) => {
    history.push(`/review/${id}`)
    window.scrollTo(0, 0);
  }

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
        <MovieDetailsPage id={movieId} goToMovie={goToMovie} goToReview={goToReview}/>
      </Route>
      <Route path="/review/:id">
        <ReviewDetailsPage id={reviewId} goToMovie={goToMovie} goToReview={goToReview}/>
      </Route>
      <Route path="/browse/reviews">
        <BrowseReviewsPage goToReview={goToReview}/>
      </Route>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route path="/">
        <HomePage goToMovie={goToMovie} goToReview={goToReview}/>
      </Route>
    </Switch>
    <Footer/>
  </div>
  )
}
export default App