import axios from 'axios'

const getPopularList = (sort) => {
    const sortQuery = sort
    const request = axios.get(`/api/list/sorted?sort_by=${sortQuery}`)
    return request.then(response => response.data)
}

const getPeriodList = (year) => {
    const request = axios.get(`/api/list/year?year=${year}`)
    return request.then(response => response.data)
}

const listAPI = {getPopularList, getPeriodList}
export default listAPI
