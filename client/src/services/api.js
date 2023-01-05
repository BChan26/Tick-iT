import Axios from 'axios'

// export const BASE_URL = process.env.REACT_APP_SERVER_URL
export const BASE_URL = 'https://murmuring-sands-94431.herokuapp.com/'

const Client = Axios.create({ baseURL: BASE_URL })
// Intercepts every request axios makes
Client.interceptors.request.use(
    (config) => {
      // Reads the token in localStorage
    const token = localStorage.getItem('token')
      // if the token exists, we set the authorization header
    if (token) {
        console.log('token exists')
        console.log(token)
        config.headers['authorization'] = `Bearer ${token}`
    }
      return config // We return the new config if the token exists or the default config if no token exists.
      // Provides the token to each request that passes through axios
    },
    (error) => Promise.reject(error)
)

export default Client