import React, { useState, useEffect } from 'react'
import movieService from '../../services/movies'
import reviewService from '../../services/reviews'
import defaultPosterPath from '../../static/img/notfound_poster.png'

const ReviewBox = (props) => {
    const {id, movieId, goToReview} = props;

    const [title, setTitle] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [author, setAuthor] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => {
        let isMounted = true
        reviewService.getReview(id).then(review => {
          if (isMounted) {
            setAuthor(review.author)
            setContent(review.content)
          }
        }) 
        movieService.getMovie(movieId).then(movie => {
          if (isMounted) {
            setTitle(movie.title)
            movie.poster_path ? setImgUrl(movie.poster_base + movie.poster_path)
              : setImgUrl(defaultPosterPath)
          }
        })  
        return () => { isMounted = false }
      }, [id, movieId])

    const buttonHandler = () => {
        goToReview(id)
      }

    return (
        <div className="w-1/2">
        <button onClick={buttonHandler}>
        <div className="flex flex-nowrap h-48 rounded overflow-hidden border-2 border-transparent hover:border-gray-100 shadow-2xl hover:shadow-2xl hover:shadow-2xl hover:shadow-inner">
            
            <img className="pt-0 w-20 h-20 lg:w-auto lg:h-auto hidden sm:block" src={imgUrl} alt={title}></img>
            
            <div className="px-6 py-0 mx-auto  ">
                <p className="font-bold w-full overflow-ellipsis text-xl ">{title}</p>
                <p className="font-bold w-full overflow-clip text-blue-100 text-md mb-2">{author}</p>
                <p className=" w-full overflow-ellipsis p-0 text-gray-700 text-base">{content}</p>
            </div>
            <div className="pt-20">
                <ion-icon name="chevron-forward-outline" size="large"></ion-icon>
            </div>
        </div>
        </button>
        </div>
)}

export default ReviewBox