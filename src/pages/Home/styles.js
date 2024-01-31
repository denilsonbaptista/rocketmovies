import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 12rem auto;
  grid-template-areas:
    "header"
    "content";
`

export const Content = styled.div`
  margin-top: 5rem;

  display: grid;
  grid-template-rows: max-content auto;

  > header {
    display: flex;
    justify-content: space-between;
    padding-right: 1.6rem;

    button {
      width: 21rem;
    }
  }

  .notes {
    margin: 4rem 0 1.6rem 0;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    overflow-y: auto;
    padding-right: 1.6rem;
  }
`
