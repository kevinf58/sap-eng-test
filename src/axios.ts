import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'http://localhost:4001',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 20000,
})

export default axios