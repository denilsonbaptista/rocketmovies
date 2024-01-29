import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 12rem auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
  }
`

export const Form = styled.form`
  margin-top: 4rem;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  > header {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    a {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 1.6rem;
      font-weight: 400;

      display: flex;
      align-items: center;
      gap: 0.8rem;
    }

    h1 {
      color: ${({ theme }) => theme.COLORS.WHITE_200};
      font-size: 3.6rem;
      font-weight: 500;
    }
  }

  .input-wrapper {
    display: flex;
    gap: 4rem;
  }
`
