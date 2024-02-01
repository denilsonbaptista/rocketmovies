import { Link } from "react-router-dom"

import { Container, Profile, Logout } from "./styles"

import { Input } from "../Input"

export function Header() {
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

        <Profile to="/profile">
          <div>
            <strong>Denilson Baptista</strong>
            <Logout>Sair</Logout>
          </div>

          <img
            src="https://github.com/denilsonbaptista.png"
            alt="Foto do usuário"
          />
        </Profile>
      </div>
    </Container>
  )
}
