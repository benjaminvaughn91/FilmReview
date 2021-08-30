import React, { useState, useEffect } from 'react'
import movieService from '../services/movies'
import ReviewForm from '../components/reviewForm/ReviewForm'
import defaultPosterPath from '../static/img/notfound_poster.png'

const MovieDetailsPage = (props) => {
    const {id} = props;

    const [title, setTitle] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [year, setYear] = useState('')
    const [director, setDirector] = useState('')
    const [tagline, setTagline] = useState('')
    const [overview, setOverview] = useState('')
    const [actors, setActors] = useState('')

    useEffect(() => {
        let isMounted = true
        movieService.getMovie(id).then(movie => {
            if (isMounted){
                setTitle(movie.title)
                setYear(movie.release_date.substring(0,4))
                setTagline(movie.tagline)
                setOverview(movie.overview)
                movie.poster_path ? setImgUrl(movie.poster_base + movie.poster_path) 
                : setImgUrl(defaultPosterPath)
            }
        })  
        movieService.getMovieCast(id).then(movie => {
            let directors = []
            movie.crew.forEach((member) => {
                if (member.job === "Director")
                    directors.push(member.name)
            })
            if (isMounted) setDirector(directors.join(', '))

            let castSize = movie.cast.length
            if (castSize > 0) {
                let actors = []
                let actorsToShow = 4
                movie.cast.forEach((member) => {
                    if (actors.length < actorsToShow - 1 && (movie.cast.indexOf(member) !== castSize - 1))
                        actors.push(member.name + ",")
                    else if (actors.length < actorsToShow)
                        actors.push(member.name)
                })
                if (castSize > actors.length)
                    actors.push('and ' + (castSize - actors.length) + ' more')
                if (isMounted) setActors(actors.join(' '))
            }
            else if (isMounted) setActors('N/A')
        })
        return () => { isMounted = false }
      }, [id])

    return (  
    <div>
    <div className="bg-gradient-to-r from-gray-400 via-red-400 to-gray-400 text-xl text-white ">
        <div className="py-7 ">
        <div className="text-center md:text-left w-11/12 md:w-2/3 mx-auto py-9 px-9 bg-gray-800 grid grid-cols-5 rounded-t-md ">
            <div className="col-start-1 col-end-6 md:col-end-3 row-start-3 md:row-start-1 row-end-6 ">
                <img className="shadow-2xl md:mt-8 rounded-md w-3/4 mx-auto" src={imgUrl} alt="poster"></img>
            </div>
            <div className="col-start-1 md:col-start-3 col-end-6 row-start-1 row-end-3 pb-12">
               <h1 className="tracking-wide font-bold text-4xl pt-6">{title} </h1> 
               <p className="pt-2 text-2xl ">{year} | <span className="hidden md:inline">Directed by </span>{director} </p>
               <p className="break-words pt-1 h-16 md:min-h-24 ">Cast: {actors}</p>
            </div>
            <div className="rounded-md mt-5 md:mt-0 col-start-1 lg:col-start-3 col-end-6 row-start-6 md:row-start-3 row-end-6"> 
                <p className="italic">{tagline}  </p>
                <p className="text-left pt-3">{overview}</p>
            </div>
        </div> 
            <div className="w-11/12 md:w-2/3 mx-auto">
                <ReviewForm movieId={id} />
            </div>
        </div> 
    </div> 
    </div>

)}

export default MovieDetailsPage

