import React from 'react'
import MovieCardDisplay from '../components/movieCardDisplay/MovieCardDisplay'
import ReviewBoxDisplay from '../components/reviewBoxDisplay/ReviewBoxDisplay'

const HomePage = (props) => {

    return (
      <div className="bg-gradient-to-r from-gray-400 via-red-400 to-gray-400 text-white pb-8">
        <div className="py-4"></div>
        <MovieCardDisplay name="Popular now" type={1} query="popularity.desc"/>
        <ReviewBoxDisplay name="New reviews" />
        <MovieCardDisplay name="Popular 1985" type={0} query="1985" />
        <MovieCardDisplay name="Popular 1895" type={0} query="1895" />
      </div>
)}

export default HomePage