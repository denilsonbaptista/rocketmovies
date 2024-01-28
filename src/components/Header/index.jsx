import { Container, Profile, Logout } from "./styles"

import { Input } from "../Input"

export function Header() {
  return (
    <Container>
      <div className="wrapper">
        <a href="#">
          <span>RocketMovies</span>
        </a>

        <Input
          placeholder="Pesquisar pelo título"
          type="search"
          autoComplete="off"
          role="search"
        />

        <Profile>
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
