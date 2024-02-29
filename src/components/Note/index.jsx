import starFull from '../../assets/star-full.svg'
import starlight from '../../assets/star-light.svg'

import { Container } from './styles'
import { Tag } from '../Tag'

export function Note({ data, ...rest }) {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starType = data.rating >= index + 1 ? starFull : starlight
    return <img key={index} src={starType} alt="Star rating" />
  })

  return (
    <Container type="button" {...rest}>
      <header>
        <h2>{data.title}</h2>

        <div className="rating">{stars}</div>
      </header>

      <p>{data.description}</p>

      {data.tags && (
        <footer>
          {data.tags.map(tag => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  )
}
