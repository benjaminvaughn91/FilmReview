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
    <div className="w-1/2">
      <button onClick={goToReview}>
      <div className="flex flex-nowrap h-48 rounded overflow-hidden border-2 border-transparent hover:border-gray-100 shadow-2xl hover:shadow-2xl hover:shadow-2xl hover:shadow-inner">
          
          <img className="pt-0 w-20 h-20 lg:w-auto lg:h-auto hidden sm:block" src={movie.poster_path} alt={movie.title}></img>
          
          <div className="px-6 py-0 mx-auto  ">
              <p className="font-bold w-full overflow-ellipsis text-xl ">{movie.title}</p>
              <p className="font-bold w-full overflow-clip text-blue-100 text-md mb-2">{review.author}</p>
              <p className=" w-full overflow-ellipsis p-0 text-gray-700 text-base">{review.content}</p>
          </div>
          <div className="pt-20">
              <ion-icon name="chevron-forward-outline" size="large"></ion-icon>
          </div>
      </div>
      </button>
    </div>
)}

export default ReviewBox