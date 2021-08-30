import axios from 'axios'

const getMovie = (id) => {
    const request = axios.get(`/api/movie/${id}`)
    return request.then(response => response.data)
  }

const getMovieCast = (id) => {
    
    const request = axios.get(`/api/movie/${id}/credits`)
    return request.then(response => response.data)
  }


export default {getMovie, getMovieCast}