import React, { useState, useEffect } from 'react'
import movieService from '../../services/movies'
import { useHistory } from "react-router-dom"

const ReviewBox = (props) => {
    const {review} = props;

    const [movie, setMovie] = useState({})

    useEffect(() => {
      let isMounted = true
      movieService.getMovie(review.movieId).then(movieObj => {
        if (isMounted) 
          setMovie(movieObj)
      })  
      return () => { isMounted = false }
    }, [review.movieId])

    const history = useHistory()

    const goToReview = () => {
        history.push(`/review/${review.id}`)
        window.scrollTo(0, 0);
    }

    return (
    <div className="w-full rounded overflow-hidden border-2 border-transparent hover:border-gray-100 shadow-2xl hover:shadow-2xl hover:shadow-2xl hover:shadow-inner">
      
      <button onClick={goToReview} className="w-full">

      <div className="h-48 flex justify-between">

          <img className="h-48 ml-2 my-2" src={movie.poster_path} alt={movie.title}></img>
          
          <div className="px-12 py-0 text-center">
              <p className="font-bold w-full overflow-ellipsis text-xl">{movie.title}</p>
              <p className="font-bold w-full overflow-clip text-blue-100 mb-2">{review.author}</p>
              <p className="w-full overflow-ellipsis p-0 text-gray-700 ">{review.content}</p>
          </div>

          <div className="">
              <ion-icon name="chevron-forward-outline" size="large"></ion-icon>
          </div>

      </div>
      </button>
    </div>
)}

export default ReviewBox