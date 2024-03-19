import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://rocketmovies-api-p1n5.onrender.com',
  withCredentials: true,
})
