import { Link } from "react-router-dom"
import { LuClock3 } from "react-icons/lu"
import { BsArrowLeft } from "react-icons/bs"

import { Container, Content, Title, For, Tags, Description } from "./styles"

import { Tag } from "../../components/Tag"
import { Header } from "../../components/Header"

export function Preview() {
  return (
    <Container>
      <Header />

      <main className="wrapper">
        <Link to="/">
          <BsArrowLeft /> Voltar
        </Link>

        <Content>
          <Title>
            <h1>Interestellar</h1>
            <div className="rating">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                >
                  <path
                    d="M15.8748 19.2503C15.7433 19.2508 15.6149 19.2098 15.508 19.1331L10.4842 15.4909L5.46037 19.1331C5.35304 19.211 5.22373 19.2526 5.09114 19.2522C4.95855 19.2517 4.82955 19.209 4.72279 19.1304C4.61603 19.0518 4.53704 18.9413 4.49724 18.8148C4.45744 18.6883 4.45889 18.5525 4.50138 18.4269L6.46076 12.6233L1.38264 9.14092C1.27264 9.06557 1.18962 8.95702 1.14571 8.83113C1.1018 8.70524 1.0993 8.56861 1.13857 8.4412C1.17784 8.31379 1.25682 8.20227 1.36399 8.12294C1.47115 8.04362 1.60087 8.00064 1.7342 8.00029H7.99904L9.88967 2.18193C9.93039 2.05632 10.0099 1.94683 10.1167 1.86917C10.2235 1.79152 10.3521 1.74969 10.4842 1.74969C10.6163 1.74969 10.7449 1.79152 10.8517 1.86917C10.9585 1.94683 11.038 2.05632 11.0787 2.18193L12.9694 8.00224H19.2342C19.3677 8.00218 19.4977 8.04486 19.6052 8.12403C19.7127 8.2032 19.792 8.31471 19.8315 8.44222C19.871 8.56973 19.8687 8.70654 19.8248 8.83262C19.7809 8.9587 19.6978 9.06743 19.5877 9.14287L14.5076 12.6233L16.4658 18.4253C16.4976 18.5192 16.5065 18.6194 16.4919 18.7174C16.4773 18.8155 16.4395 18.9087 16.3818 18.9893C16.324 19.0699 16.248 19.1356 16.1598 19.181C16.0717 19.2263 15.974 19.2501 15.8748 19.2503Z"
                    fill="#FF859B"
                  />
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                >
                  <path
                    d="M15.8748 19.2503C15.7433 19.2508 15.6149 19.2098 15.508 19.1331L10.4842 15.4909L5.46037 19.1331C5.35304 19.211 5.22373 19.2526 5.09114 19.2522C4.95855 19.2517 4.82955 19.209 4.72279 19.1304C4.61603 19.0518 4.53704 18.9413 4.49724 18.8148C4.45744 18.6883 4.45889 18.5525 4.50138 18.4269L6.46076 12.6233L1.38264 9.14092C1.27264 9.06557 1.18962 8.95702 1.14571 8.83113C1.1018 8.70524 1.0993 8.56861 1.13857 8.4412C1.17784 8.31379 1.25682 8.20227 1.36399 8.12294C1.47115 8.04362 1.60087 8.00064 1.7342 8.00029H7.99904L9.88967 2.18193C9.93039 2.05632 10.0099 1.94683 10.1167 1.86917C10.2235 1.79152 10.3521 1.74969 10.4842 1.74969C10.6163 1.74969 10.7449 1.79152 10.8517 1.86917C10.9585 1.94683 11.038 2.05632 11.0787 2.18193L12.9694 8.00224H19.2342C19.3677 8.00218 19.4977 8.04486 19.6052 8.12403C19.7127 8.2032 19.792 8.31471 19.8315 8.44222C19.871 8.56973 19.8687 8.70654 19.8248 8.83262C19.7809 8.9587 19.6978 9.06743 19.5877 9.14287L14.5076 12.6233L16.4658 18.4253C16.4976 18.5192 16.5065 18.6194 16.4919 18.7174C16.4773 18.8155 16.4395 18.9087 16.3818 18.9893C16.324 19.0699 16.248 19.1356 16.1598 19.181C16.0717 19.2263 15.974 19.2501 15.8748 19.2503Z"
                    fill="#FF859B"
                  />
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                >
                  <path
                    d="M15.8748 19.2503C15.7433 19.2508 15.6149 19.2098 15.508 19.1331L10.4842 15.4909L5.46037 19.1331C5.35304 19.211 5.22373 19.2526 5.09114 19.2522C4.95855 19.2517 4.82955 19.209 4.72279 19.1304C4.61603 19.0518 4.53704 18.9413 4.49724 18.8148C4.45744 18.6883 4.45889 18.5525 4.50138 18.4269L6.46076 12.6233L1.38264 9.14092C1.27264 9.06557 1.18962 8.95702 1.14571 8.83113C1.1018 8.70524 1.0993 8.56861 1.13857 8.4412C1.17784 8.31379 1.25682 8.20227 1.36399 8.12294C1.47115 8.04362 1.60087 8.00064 1.7342 8.00029H7.99904L9.88967 2.18193C9.93039 2.05632 10.0099 1.94683 10.1167 1.86917C10.2235 1.79152 10.3521 1.74969 10.4842 1.74969C10.6163 1.74969 10.7449 1.79152 10.8517 1.86917C10.9585 1.94683 11.038 2.05632 11.0787 2.18193L12.9694 8.00224H19.2342C19.3677 8.00218 19.4977 8.04486 19.6052 8.12403C19.7127 8.2032 19.792 8.31471 19.8315 8.44222C19.871 8.56973 19.8687 8.70654 19.8248 8.83262C19.7809 8.9587 19.6978 9.06743 19.5877 9.14287L14.5076 12.6233L16.4658 18.4253C16.4976 18.5192 16.5065 18.6194 16.4919 18.7174C16.4773 18.8155 16.4395 18.9087 16.3818 18.9893C16.324 19.0699 16.248 19.1356 16.1598 19.181C16.0717 19.2263 15.974 19.2501 15.8748 19.2503Z"
                    fill="#FF859B"
                  />
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                >
                  <path
                    d="M15.8748 19.2503C15.7433 19.2508 15.6149 19.2098 15.508 19.1331L10.4842 15.4909L5.46037 19.1331C5.35304 19.211 5.22373 19.2526 5.09114 19.2522C4.95855 19.2517 4.82955 19.209 4.72279 19.1304C4.61603 19.0518 4.53704 18.9413 4.49724 18.8148C4.45744 18.6883 4.45889 18.5525 4.50138 18.4269L6.46076 12.6233L1.38264 9.14092C1.27264 9.06557 1.18962 8.95702 1.14571 8.83113C1.1018 8.70524 1.0993 8.56861 1.13857 8.4412C1.17784 8.31379 1.25682 8.20227 1.36399 8.12294C1.47115 8.04362 1.60087 8.00064 1.7342 8.00029H7.99904L9.88967 2.18193C9.93039 2.05632 10.0099 1.94683 10.1167 1.86917C10.2235 1.79152 10.3521 1.74969 10.4842 1.74969C10.6163 1.74969 10.7449 1.79152 10.8517 1.86917C10.9585 1.94683 11.038 2.05632 11.0787 2.18193L12.9694 8.00224H19.2342C19.3677 8.00218 19.4977 8.04486 19.6052 8.12403C19.7127 8.2032 19.792 8.31471 19.8315 8.44222C19.871 8.56973 19.8687 8.70654 19.8248 8.83262C19.7809 8.9587 19.6978 9.06743 19.5877 9.14287L14.5076 12.6233L16.4658 18.4253C16.4976 18.5192 16.5065 18.6194 16.4919 18.7174C16.4773 18.8155 16.4395 18.9087 16.3818 18.9893C16.324 19.0699 16.248 19.1356 16.1598 19.181C16.0717 19.2263 15.974 19.2501 15.8748 19.2503Z"
                    fill="#FF859B"
                  />
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.4842 1.75C10.7549 1.75 10.9949 1.92433 11.0786 2.18182L12.9695 8H19.2342C19.5081 8 19.7501 8.17835 19.8312 8.43998C19.9122 8.70161 19.8135 8.98555 19.5876 9.14046L14.5088 12.6231L16.467 18.4251C16.5539 18.6828 16.4643 18.9671 16.2453 19.1283C16.0264 19.2895 15.7283 19.2907 15.5081 19.1311L10.4842 15.4906L5.46029 19.1311C5.24009 19.2907 4.942 19.2895 4.72301 19.1283C4.50403 18.9671 4.41441 18.6828 4.50137 18.4251L6.45956 12.6231L1.38072 9.14046C1.15482 8.98555 1.05611 8.70161 1.13719 8.43998C1.21828 8.17835 1.46027 8 1.73418 8H7.99887L9.88978 2.18182C9.97346 1.92433 10.2134 1.75 10.4842 1.75ZM10.4842 4.39709L9.04732 8.81818C8.96364 9.07567 8.72368 9.25 8.45293 9.25H3.7508L7.55638 11.8595C7.78704 12.0177 7.88455 12.3099 7.79511 12.5749L6.31157 16.9705L10.1174 14.2127C10.3362 14.0541 10.6321 14.0541 10.8509 14.2127L14.6568 16.9705L13.1732 12.5749C13.0838 12.3099 13.1813 12.0177 13.412 11.8595L17.2176 9.25H12.5154C12.2447 9.25 12.0047 9.07567 11.921 8.81818L10.4842 4.39709Z"
                    fill="#FF859B"
                  />
                </svg>
              </span>
            </div>
          </Title>

          <For>
            <img
              src="https://github.com/denilsonbaptista.png"
              alt="Foto do usuário"
            />
            <p>Por Denilson Baptista</p>

            <LuClock3 />
            <p>23/05/2023 às 08:00</p>
          </For>

          <Tags>
            <Tag title="Ficção Científica" isPreview />
            <Tag title="Drama" isPreview />
            <Tag title="Família" isPreview />
          </Tags>

          <Description>
            Pragas nas colheitas fizeram a civilização humana regredir para uma
            sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto
            da NASA, tem uma fazenda com sua família. Murphy, a filha de dez
            anos de Cooper, acredita que seu quarto está assombrado por um
            fantasma que tenta se comunicar com ela. Pai e filha descobrem que o
            "fantasma" é uma inteligência desconhecida que está enviando
            mensagens codificadas através de radiação gravitacional, deixando
            coordenadas em binário que os levam até uma instalação secreta da
            NASA liderada pelo professor John Brand. O cientista revela que um
            buraco de minhoca foi aberto perto de Saturno e que ele leva a
            planetas que podem oferecer condições de sobrevivência para a
            espécie humana. As "missões Lázaro" enviadas anos antes
            identificaram três planetas potencialmente habitáveis orbitando o
            buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em
            homenagem aos astronautas que os pesquisaram. Brand recruta Cooper
            para pilotar a nave espacial Endurance e recuperar os dados dos
            astronautas; se um dos planetas se mostrar habitável, a humanidade
            irá seguir para ele na instalação da NASA, que é na realidade uma
            enorme estação espacial. A partida de Cooper devasta Murphy.
            <br /> <br />
            Além de Cooper, a tripulação da Endurance é formada pela bióloga
            Amelia, filha de Brand; o cientista Romilly, o físico planetário
            Doyle, além dos robôs TARS e CASE. Eles entram no buraco de minhoca
            e se dirigem a Miller, porém descobrem que o planeta possui enorme
            dilatação gravitacional temporal por estar tão perto de Gargântua:
            cada hora na superfície equivale a sete anos na Terra. Eles entram
            em Miller e descobrem que é inóspito já que é coberto por um oceano
            raso e agitado por ondas enormes. Uma onda atinge a tripulação
            enquanto Amelia tenta recuperar os dados de Miller, matando Doyle e
            atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia
            descobrem que 23 anos se passaram.
            <br /> <br />
            Além de Cooper, a tripulação da Endurance é formada pela bióloga
            Amelia, filha de Brand; o cientista Romilly, o físico planetário
            Doyle, além dos robôs TARS e CASE. Eles entram no buraco de minhoca
            e se dirigem a Miller, porém descobrem que o planeta possui enorme
            dilatação gravitacional temporal por estar tão perto de Gargântua:
            cada hora na superfície equivale a sete anos na Terra. Eles entram
            em Miller e descobrem que é inóspito já que é coberto por um oceano
            raso e agitado por ondas enormes. Uma onda atinge a tripulação
            enquanto Amelia tenta recuperar os dados de Miller, matando Doyle e
            atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia
            descobrem que 23 anos se passaram.
            <br /> <br />
            Além de Cooper, a tripulação da Endurance é formada pela bióloga
            Amelia, filha de Brand; o cientista Romilly, o físico planetário
            Doyle, além dos robôs TARS e CASE. Eles entram no buraco de minhoca
            e se dirigem a Miller, porém descobrem que o planeta possui enorme
            dilatação gravitacional temporal por estar tão perto de Gargântua:
            cada hora na superfície equivale a sete anos na Terra. Eles entram
            em Miller e descobrem que é inóspito já que é coberto por um oceano
            raso e agitado por ondas enormes. Uma onda atinge a tripulação
            enquanto Amelia tenta recuperar os dados de Miller, matando Doyle e
            atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia
            descobrem que 23 anos se passaram.
            <br /> <br />
            Além de Cooper, a tripulação da Endurance é formada pela bióloga
            Amelia, filha de Brand; o cientista Romilly, o físico planetário
            Doyle, além dos robôs TARS e CASE. Eles entram no buraco de minhoca
            e se dirigem a Miller, porém descobrem que o planeta possui enorme
            dilatação gravitacional temporal por estar tão perto de Gargântua:
            cada hora na superfície equivale a sete anos na Terra. Eles entram
            em Miller e descobrem que é inóspito já que é coberto por um oceano
            raso e agitado por ondas enormes. Uma onda atinge a tripulação
            enquanto Amelia tenta recuperar os dados de Miller, matando Doyle e
            atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia
            descobrem que 23 anos se passaram.
            <br /> <br />
            Além de Cooper, a tripulação da Endurance é formada pela bióloga
            Amelia, filha de Brand; o cientista Romilly, o físico planetário
            Doyle, além dos robôs TARS e CASE. Eles entram no buraco de minhoca
            e se dirigem a Miller, porém descobrem que o planeta possui enorme
            dilatação gravitacional temporal por estar tão perto de Gargântua:
            cada hora na superfície equivale a sete anos na Terra. Eles entram
            em Miller e descobrem que é inóspito já que é coberto por um oceano
            raso e agitado por ondas enormes. Uma onda atinge a tripulação
            enquanto Amelia tenta recuperar os dados de Miller, matando Doyle e
            atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia
            descobrem que 23 anos se passaram.
          </Description>
        </Content>
      </main>
    </Container>
  )
}
