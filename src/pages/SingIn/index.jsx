import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMail, FiLock } from 'react-icons/fi'

import { useAuth } from '../../hooks/auth'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Background } from './styles'

export function SingIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { singIn } = useAuth()

  function handleSingIng(event) {
    event.preventDefault()

    singIn({ email, password })
  }

  return (
    <Container>
      <Form onSubmit={handleSingIng}>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Faça seu login</h2>

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Entrar" type="submit" />

        <Link to="/register">Criar conta</Link>
      </Form>

      <Background />
    </Container>
  )
}
