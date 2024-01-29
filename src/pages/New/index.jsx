import { BsArrowLeft } from "react-icons/bs"
import { Container, Form } from "./styles"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"

export function New() {
  return (
    <Container>
      <Header />

      <main className="wrapper">
        <Form>
          <header>
            <a href="#">
              <BsArrowLeft /> Voltar
            </a>
            <h1>Novo filme</h1>
          </header>

          <div className="input-wrapper">
            <Input type="text" placeholder="Título" />
            <Input
              type="number"
              placeholder="Sua nota (de 0 a 5)"
              min="0"
              max="5"
            />
          </div>

          <Textarea placeholder="Observações" />
        </Form>
      </main>
    </Container>
  )
}
