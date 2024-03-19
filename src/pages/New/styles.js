import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 12rem auto;
  grid-template-areas:
    'header'
    'content';

  > main {
    margin: 4rem 0 2.6rem 0;

    display: grid;
    grid-template-rows: max-content auto;

    a {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 1.6rem;
      font-weight: 400;

      display: flex;
      align-items: center;
      gap: 0.8rem;

      margin-bottom: 2.4rem;
    }

    fieldset {
      padding-right: 1.6rem;

      overflow-y: auto;

      border: none;
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  > header {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

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

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 2.4rem;

    padding: 1.6rem;

    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  }

  .buttons {
    display: flex;
    gap: 4rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    > header h1 {
      font-size: 2.8rem;
    }
  }
`
