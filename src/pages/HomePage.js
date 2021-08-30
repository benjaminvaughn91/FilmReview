import React from 'react'
import MovieCardDisplay from '../components/movieCardDisplay/MovieCardDisplay'
import ReviewBoxDisplay from '../components/reviewBoxDisplay/ReviewBoxDisplay'

const HomePage = (props) => {

    return (
      <div>
        <MovieCardDisplay name="Popular now" type={1} query="popularity.desc" goToMovie={props.goToMovie} />
        <ReviewBoxDisplay name="New reviews" goToReview={props.goToReview}/>
        <MovieCardDisplay name="Popular 1985" type={0} query="1985" goToMovie={props.goToMovie} />
        <MovieCardDisplay name="Popular 1895" type={0} query="1895" goToMovie={props.goToMovie} />
        <MovieCardDisplay name="Original Title" type={1} query="original_title.desc" goToMovie={props.goToMovie} />
      </div>
)}

export default HomePage