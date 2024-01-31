import { Container } from "./styles"

export function Button({
  icon: Icon,
  title,
  loading = false,
  isDelete = false,
  ...rest
}) {
  return (
    <Container type="button" $disabled={loading} $isDelete={isDelete} {...rest}>
      {Icon && <Icon size={20} />}
      {loading ? "Carregando" : title}
    </Container>
  )
}
