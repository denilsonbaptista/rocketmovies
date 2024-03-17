import { createContext, useContext, useState, useEffect } from 'react'

import { api } from '../services/api'

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function singIn({ email, password }) {
    try {
      const response = await api.post(
        '/sessions',
        { email, password },
        { withCredentials: true },
      )
      const { user } = response.data

      localStorage.setItem('@rocketmovies:user', JSON.stringify(user))

      setData({ user })
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possivel entrar.')
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@rocketmovies:user')

    setData({})
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append('avatar', avatarFile)

        const response = await api.patch('/users/avatar', fileUploadForm)
        user.avatar = response.data.avatar
      }

      await api.put('/users', user)
      localStorage.setItem('@rocketmovies:user', JSON.stringify(user))

      setData({ user })
      alert('Perfil atualizado com sucesso!')
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possivel atualizar o perfil.')
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem('@rocketmovies:user')

    if (user) {
      setData({
        user: JSON.parse(user),
      })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{ singIn, signOut, updateProfile, user: data.user }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
