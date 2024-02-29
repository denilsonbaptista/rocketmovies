import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { FiPlus } from 'react-icons/fi'

import { api } from '../../services/api'

import { Container, Content, Newnote } from './styles'

import { Header } from '../../components/Header'
import { Note } from '../../components/Note'

export function Home() {
  const [search, setSeach] = useState('')
  const [notes, setNotes] = useState([])

  const navigate = useNavigate()

  function handleDescription(id) {
    navigate(`/preview/${id}`)
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`)
      setNotes(response.data)
    }

    fetchNotes()
  }, [search])

  return (
    <Container>
      <Header onChange={e => setSeach(e.target.value)} />

      <Content className="wrapper">
        <header>
          <h1>Meus filmes</h1>

          <Newnote to="/new">
            <FiPlus />
            Adicionar Filme
          </Newnote>
        </header>

        <div className="notes">
          {notes.map(note => (
            <Note
              key={String(note.id)}
              data={note}
              onClick={() => handleDescription(note.id)}
            />
          ))}
        </div>
      </Content>
    </Container>
  )
}
