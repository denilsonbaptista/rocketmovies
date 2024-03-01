import { useState, useEffect } from 'react'

import { Link, useParams } from 'react-router-dom'
import { LuClock3 } from 'react-icons/lu'
import { BsArrowLeft } from 'react-icons/bs'

import starFull from '../../assets/star-full.svg'
import starLight from '../../assets/star-light.svg'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import { Container, Content, Title, For, Tags, Description } from './styles'

import { Tag } from '../../components/Tag'
import { Header } from '../../components/Header'

export function Preview() {
  const { user } = useAuth()

  const [data, setData] = useState({})

  const params = useParams()

  const date = data.updated_at ? data.updated_at.split(' ')[0] : ''
  const time = data.updated_at ? data.updated_at.split(' ')[1] : ''

  const stars = Array.from({ length: 5 }, (_, index) => {
    const starType = data.rating >= index + 1 ? starFull : starLight
    return <img key={index} src={starType} alt="Star rating" />
  })

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`notes/${params.id}`)
      setData(response.data)
    }

    fetchData()
  }, [])

  return (
    <Container>
      <Header />

      <main className="wrapper">
        <Link to={-1}>
          <BsArrowLeft /> Voltar
        </Link>

        <Content>
          <Title>
            <h1>{data.title}</h1>
            <div className="rating">{stars}</div>
          </Title>

          <For>
            <img src={avatarUrl} alt="Foto do usuário" />
            <p>Por {user.name}</p>

            <LuClock3 />
            <p>{`${date} às ${time}`}</p>
          </For>

          <Tags>
            {data.tags &&
              data.tags.map(tag => (
                <Tag key={tag.id} title={tag.name} isPreview />
              ))}
          </Tags>

          <Description>{data.description}</Description>
        </Content>
      </main>
    </Container>
  )
}
