import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

import { Container, Profile, Logout } from './styles'

import { Input } from '../Input'

export function Header() {
  const { signOut } = useAuth()
  const navigate = useNavigate()

  function handleSingOut() {
    navigate('/')
    signOut()
  }

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
        />

        <Profile>
          <div>
            <strong>Denilson Baptista</strong>
            <Logout onClick={handleSingOut}>Sair</Logout>
          </div>

          <Link to="/profile">
            <img
              src="https://github.com/denilsonbaptista.png"
              alt="Foto do usuário"
            />
          </Link>
        </Profile>
      </div>
    </Container>
  )
}
