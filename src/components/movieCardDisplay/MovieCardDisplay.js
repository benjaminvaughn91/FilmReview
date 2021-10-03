import React, { useState, useEffect } from 'react'
import MovieCard from '../movieCard/MovieCard'
import listService from '../../services/list'
import DisplayBorder from '../displayBorder/DisplayBorder'

const MovieCardDisplay = (props) => {
    const {type, query, name} = props;

    const [movies, setMovies] = useState([])

    useEffect(() => {
        let isMounted = true
        if (type === 0)
            listService.getPeriodList(query).then(movies => {
                if (isMounted) setMovies(reduceList(8, movies))
            })
        else if (type === 1)
            listService.getPopularList(query).then(movies => {
                if (isMounted) setMovies(reduceList(8, movies))
            })
        return () => { isMounted = false }
    }, [type, query])

    const reduceList = (nr, list) => {
        let reducedList = []
        for (let i = 0; i < nr; i++)
            reducedList[i] = list[i]
        return reducedList
    }
    
    return (
    <div>
    <div className="container w-2/3 md:w-full xl:w-3/4 mx-auto flex flex-wrap justify-center">
        <DisplayBorder name={name}/>
        
        <div className="flex flex-wrap xl:flex-nowrap justify-center pb-1">
            {movies.map((movie, i) => 
                <div key={Number(movie.id)} className="p-1">
                    <div>
                        {(i < 6) && //Show these movies for all screen sizes
                        <MovieCard id={movie.id} posterPath={movie.poster_path} title={movie.original_title}/>
                        }
                        {(i >= 6) && //Show these movies only for ipad-sized screens
                        <div className="hidden md:inline lg:hidden">
                        <MovieCard id={movie.id} posterPath={movie.poster_path} title={movie.original_title}/>
                        </div>}
                    </div>       
                </div>    
            )}
        </div>
    </div>
    </div>
)}

export default MovieCardDisplay