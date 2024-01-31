import { Container } from "./styles"

export function Button({ title, loading = false, isDelete = false, ...rest }) {
  return (
    <Container type="button" $disabled={loading} $isDelete={isDelete} {...rest}>
      {loading ? "Carregando" : title}
    </Container>
  )
}
