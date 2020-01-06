import axios from 'axios'

const api = axios.create({
  baseURL: 'https://domain.com/api',
})

api.interceptors.request.use(
  (request) => {
    console.log(request)
    return request
  },
  (error) => {
    // no internet connectivity (request fails)
    console.log(error)
    return Promise.reject(error)
  },
)

api.interceptors.response.use(
  (response) => {
    console.log(response)
    return response
  },
  (error) => {
    // 404 502 (server returns error)
    console.log(error)
    return Promise.reject(error)
  },
)

export default api
