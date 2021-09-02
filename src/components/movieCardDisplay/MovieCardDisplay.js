import React, { useState, useEffect } from 'react'
import MovieCard from '../movieCard/MovieCard'
import listService from '../../services/list'
import DisplayBorder from '../displayBorder/DisplayBorder'

const MovieCardDisplay = (props) => {
    const {type, query, name, goToMovie} = props;

    const [movies, setMovies] = useState([])

    const maxMovies = 8

    const reduceList = (nr, list) => {
        let reducedList = []
        for (let i = 0; i < nr; i++)
            reducedList[i] = list[i]
        return reducedList
    }

    useEffect(() => {
        let isMounted = true
        if (type === 0)
            listService.getPeriodList(query).then(movies => {
                if (isMounted) setMovies(reduceList(maxMovies, movies))
            })
        else if (type === 1)
            listService.getPopularList(query).then(movies => {
                if (isMounted) setMovies(reduceList(maxMovies, movies))
            })
        return () => { isMounted = false }
    }, [type, query])
    
    return (
    <div>
        <div className="container w-2/3 md:w-full xl:w-2/3 mx-auto flex flex-wrap justify-center pt-4 pb-1">
            <DisplayBorder name={name}/>

            {movies.map((movie, i) => 
                <div key={Number(movie.id)} className="p-1">
                    <div>
                        {(i < maxMovies - 2) && 
                        <MovieCard id={movie.id} goToMovie={goToMovie} />}
                        {(i >= maxMovies - 2) && 
                        <div className="hidden md:inline lg:hidden">
                        <MovieCard id={movie.id} goToMovie={goToMovie} />
                        </div>}
                    </div>
                </div>    
            )}
        </div>
    </div>
)}

export default MovieCardDisplay