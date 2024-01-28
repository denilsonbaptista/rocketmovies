import { Container } from "./styles"

export function Tag({ isPreview, title, ...rest }) {
  return (
    <Container isPreview={isPreview} {...rest}>
      {title}
    </Container>
  )
}
