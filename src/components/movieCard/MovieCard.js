import React, { useState, useEffect } from 'react'
import movieService from '../../services/movies'
import defaultPosterPath from '../../static/img/notfound_poster.png'

const MovieCard = (props) => {
    const {id, goToMovie} = props;

    const [title, setTitle] = useState('')
    const [imgUrl, setImgUrl] = useState('')

    useEffect(() => {
        let isMounted = true
        movieService.getMovie(id).then(movie => {
          if (isMounted) {
            setTitle(movie.title)
            movie.poster_path ? setImgUrl(movie.poster_base + movie.poster_path)
            : setImgUrl(defaultPosterPath)
          }
        })  
        return () => { isMounted = false }
      }, [id])

    const buttonHandler = () => {
        goToMovie(id)
      }

    return (
    <div className="w-28 md:w-40 "> 
        <p><button onClick={buttonHandler}>
          <img className="h-40 md:h-60 border-2 border-transparent hover:border-gray-100 shadow-2xl hover:shadow-2xl hover:shadow-2xl hover:shadow-inner rounded-md" 
            src={imgUrl} alt="poster"></img>
        </button></p>
        <p className="text-white font-bold overflow-hidden truncate w-full text-center pt-1">{title}</p>
    </div>
)}

export default MovieCard