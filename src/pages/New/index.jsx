import { BsArrowLeft } from "react-icons/bs"
import { Container, Form } from "./styles"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { Section } from "../../components/Section"
import { Noteitem } from "../../components/Noteitem"
import { Button } from "../../components/Button"

export function New() {
  return (
    <Container>
      <Header />

      <main className="wrapper">
        <a href="#">
          <BsArrowLeft /> Voltar
        </a>

        <fieldset>
          <Form>
            <header>
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

            <Section title="Marcadores">
              <div className="tags">
                <Noteitem values="React" />
                <Noteitem isNew placeholder="Novo marcador" />
              </div>
            </Section>

            <div className="buttons">
              <Button title="Excluir filme" isDelete />
              <Button title="Salvar alterações" />
            </div>
          </Form>
        </fieldset>
      </main>
    </Container>
  )
}
