import styled from 'styled-components'
import backgroundImg from '../../assets/background.png'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    justify-content: center;
  }
`

export const Form = styled.form`
  width: min(64rem, 90%);

  display: grid;
  place-content: center;

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 4.8rem;
    font-weight: 700;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-size: 1.4rem;
  }

  > h2 {
    padding: 4.8rem 0;

    color: ${({ theme }) => theme.COLORS.WHITE_200};
    font-size: 2.4rem;
    font-weight: 500;
  }

  > div:nth-child(4) {
    margin-bottom: 0.8rem;
  }

  > button {
    margin-top: 2.4rem;
  }

  > a {
    margin-top: 4.2rem;

    text-align: center;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    > h1 {
      font-size: 3.8rem;
    }

    > p {
      font-size: 1.2rem;
    }

    > h2 {
      padding: 3.8rem 0;
    }
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: none;
  }
`
