import axios from 'axios'

const getReviews = () => {
  const request = axios.get(`/api/review/`)
  return request.then(response => response.data)
}

const getReview = (id) => {
    const request = axios.get(`/api/review/${id}`)
    return request.then(response => response.data)
}

const createReview = (reviewObj) => {
    const request = axios.post('/api/review/', reviewObj)
    return request.then(response => response.data)
}

export default {getReview, getReviews, createReview}