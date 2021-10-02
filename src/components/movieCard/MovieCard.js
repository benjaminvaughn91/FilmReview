import React, { useState, useEffect } from 'react'
import movieService from '../../services/movies'
import defaultPosterPath from '../../static/img/notfound_poster.png'
import { useHistory } from "react-router-dom"

const MovieCard = (props) => {
    const {id} = props;

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

    const history = useHistory()

    const goToMovie = () => {
        history.push(`/detail/${id}`)
        window.scrollTo(0, 0);
      }

    return (
    <div className="w-28 md:w-40 "> 
        <p><button onClick={goToMovie}>
          <img className="h-40 md:h-60 border-2 border-transparent hover:border-gray-100 shadow-2xl hover:shadow-2xl hover:shadow-2xl hover:shadow-inner rounded-md" 
            src={imgUrl} alt={title}></img>
        </button></p>
        <p className="text-white font-bold overflow-hidden truncate w-full text-center pt-1">{title}</p>
    </div>
)}

export default MovieCard