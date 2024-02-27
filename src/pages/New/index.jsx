import { useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import { Container, Form } from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Section } from '../../components/Section'
import { Noteitem } from '../../components/Noteitem'
import { Button } from '../../components/Button'

export function New() {
  const [title, setTitle] = useState('')
  const [rating, setRating] = useState(0)
  const [description, setDescription] = useState('')

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

  function handleDeleteTag(deleteTag) {
    setTags(prevState => prevState.filter(tag => tag !== deleteTag))
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  async function handleNewNote(event) {
    event.preventDefault()

    if (!title || !rating || !description) {
      return alert('Preencha todos os campos')
    }

    if (newTag) {
      return alert(
        'Você deixou uma tag no campo adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.',
      )
    }

    api.post('/notes', {
      title,
      rating,
      description,
      tags,
    })

    alert('Filme cadastrado com sucesso!')
    navigate(-1)
  }

  return (
    <Container>
      <Header />

      <main className="wrapper">
        <Link to={-1}>
          <BsArrowLeft /> Voltar
        </Link>

        <fieldset>
          <Form onSubmit={handleNewNote}>
            <header>
              <h1>Novo filme</h1>
            </header>

            <div className="input-wrapper">
              <Input
                type="text"
                placeholder="Título"
                onChange={e => setTitle(e.target.value)}
              />

              <Input
                type="number"
                placeholder="Sua nota (de 0 a 5)"
                min="0"
                max="5"
                onChange={e => setRating(e.target.value)}
              />
            </div>

            <Textarea
              placeholder="Observações"
              onChange={e => setDescription(e.target.value)}
            />

            <Section title="Marcadores">
              <div className="tags">
                {tags.map((tag, index) => (
                  <Noteitem
                    key={String(index)}
                    values={tag}
                    onClick={() => handleDeleteTag(tag)}
                  />
                ))}

                <Noteitem
                  isNew
                  placeholder="Novo marcador"
                  onChange={e => setNewTag(e.target.value)}
                  onClick={handleAddTag}
                />
              </div>
            </Section>

            <div className="buttons">
              <Button title="Excluir filme" isDelete />
              <Button title="Salvar alterações" type="submit" />
            </div>
          </Form>
        </fieldset>
      </main>
    </Container>
  )
}
