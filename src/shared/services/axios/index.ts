import axios from 'axios'

const Api = axios.create({
  baseURL: 'http://localhost:5005',
})

export { Api }