import { BrowserRouter } from 'react-router-dom'
import { useEffect } from 'react'

import { api } from '../services/api'

import { useAuth } from '../hooks/auth'
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

export function Routes() {
  const { user, signOut } = useAuth()

  useEffect(() => {
    const interval = setInterval(() => {
      api.get('/users/validated').catch(error => {
        if (error.response?.status === 401) {
          signOut()
        }
      })
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  return <BrowserRouter>{user ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
}
