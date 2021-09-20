import React, { useState, useEffect } from 'react'
import movieService from '../services/movies'
import reviewService from '../services/reviews'
import defaultPosterPath from '../static/img/notfound_poster.png'

const MovieDetailsPage = (props) => {
    const {id} = props;

    const [title, setTitle] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [author, setAuthor] = useState('')
    const [content, setContent] = useState('')
    const [movieId, setMovieId] = useState(null)

    useEffect(() => {
        let isMounted = true
        reviewService.getReview(id).then(review => {
            if (isMounted){
                setAuthor(review.author)
                setContent(review.content)
                setMovieId(review.movieId)
            }
        }) 
        if (movieId){
            if (isMounted) {
                movieService.getMovie(movieId).then(movie => {
                setTitle(movie.title)
                movie.poster_path ? setImgUrl(movie.poster_base + movie.poster_path)
                : setImgUrl(defaultPosterPath)
                })  
            }
        }
        return () => { isMounted = false }
      }, [id, movieId])
    
    return (
    <div>
    <div className="bg-gradient-to-r from-gray-400 via-red-400 to-gray-400 text-xl text-white ">
        <div className="py-7">
        <div className="text-center md:text-left w-11/12 md:w-2/3 mx-auto py-9 px-9 bg-gray-800 grid grid-cols-5 rounded-md">
            <div className="col-start-1 col-end-3 row-start-3 md:row-start-1 row-end-6 ">
                <img className="hidden lg:block mt-8 shadow-2xl rounded-md w-3/4 mx-auto" src={imgUrl} alt={title}></img>
            </div>
            <div className="col-start-1 lg:col-start-3 text-center col-end-6 row-start-1 row-end-3 pb-12">
               <h1 className="tracking-wide font-bold text-4xl pt-6">{title} </h1> 
               <p className="pt-2 text-2xl">Review by {author} </p>
            </div>
            <div className="rounded-md col-start-1 lg:col-start-3 col-end-6 row-start-3 row-end-6"> 
                <p className="text-left pt-3">{content}</p>
            </div>
        </div> 
        </div>
    </div>
    </div>
)}

export default MovieDetailsPage
