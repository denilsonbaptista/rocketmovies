import { Container } from "./styles"

export function Tag({ isPreview = false, title, ...rest }) {
  return (
    <Container $isPreview={isPreview} {...rest}>
      {title}
    </Container>
  )
}
