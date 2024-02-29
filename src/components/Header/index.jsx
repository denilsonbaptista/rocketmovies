import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

import { api } from '../../services/api'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { Container, Profile, Logout } from './styles'

import { Input } from '../Input'

export function Header({ onChange }) {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  function handleSingOut() {
    navigate('/')
    signOut()
  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  return (
    <Container>
      <div className="wrapper">
        <Link to="/">
          <span>RocketMovies</span>
        </Link>

        <Input
          placeholder="Pesquisar pelo título"
          type="search"
          autoComplete="off"
          role="search"
          onChange={onChange}
        />

        <Profile>
          <div>
            <strong>{user.name}</strong>
            <Logout onClick={handleSingOut}>Sair</Logout>
          </div>

          <Link to="/profile">
            <img src={avatarUrl} alt="Foto do usuário" />
          </Link>
        </Profile>
      </div>
    </Container>
  )
}
