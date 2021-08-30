import React, { useState, useEffect } from 'react'
import MovieCard from '../movieCard/MovieCard'
import listService from '../../services/list'
import border from '../../static/img/line_border.png'

const MovieCardDisplay = (props) => {
    const [movies, setMovies] = useState([])

    const {type, query, name, goToMovie} = props;

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
                if (isMounted) setMovies(reduceList(6, movies))
            })
        else if (type === 1)
            listService.getPopularList(query).then(movies => {
                if (isMounted) setMovies(reduceList(6, movies))
            })
        return () => { isMounted = false }
    }, [type, query])
    
    return (
    <div>
    <section className="bg-gradient-to-r from-gray-400 via-red-400 to-gray-400 text-white">

        <div className="container w-2/3 md:w-2/3 mx-auto flex items-center flex-wrap  pt-4 pb-1">

            <nav className="w-full top-0 ml-1 px-1 md:px-6 md:py-1 ">
                <div className="w-full container mx-auto flex flex-wrap justify-between items-center mt-0  py-3"> 
                    <a className="uppercase tracking-wide font-bold text-gray-100 text-xl" href="#">{name} </a>

                    <img className="hidden xl:block mx-16 " src={border} alt="Line border"></img>

                    <img className="md:hidden" src={border} alt="Line border"></img>
                </div>
            </nav>

            {movies.map(movie =>
                <div key={Number(movie.id)} className="p-1">
                    <div>
                        <MovieCard id={movie.id} goToMovie={goToMovie} />
                    </div>
                </div>    
            )}
        </div>

    </section>
    </div>
)}

export default MovieCardDisplay