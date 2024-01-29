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
    padding-top: 4rem;

    a {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 1.6rem;
      font-weight: 400;

      display: flex;
      align-items: center;
      gap: 0.8rem;
    }
  }
`
export const Content = styled.div`
  margin-top: 2.4rem;
  padding-right: 1.6rem;

  height: 70vh;
  overflow-y: auto;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 1.9rem;

  > h1 {
    color: ${({ theme }) => theme.COLORS.WHITE_200};
    font-size: 3.6rem;
    font-weight: 500;
  }

  > .rating {
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
      display: flex;
      align-items: center;
    }
  }
`
export const For = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  margin-top: 2.4rem;

  img {
    width: 1.6rem;
    height: 1.6rem;

    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  }

  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`
export const Tags = styled.div`
  margin-top: 4rem;

  display: flex;
  align-items: center;
  gap: 0.8rem;
`
export const Description = styled.p`
  margin-top: 4rem;

  color: ${({ theme }) => theme.COLORS.WHITE_200};
  text-align: justify;
  font-family: "Roboto Slab";
  font-weight: 400;
`
