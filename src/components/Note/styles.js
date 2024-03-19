import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 3.2rem;

  border: none;
  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  text-align: justify;

  > header h2 {
    font-size: 2.4rem;
    font-weight: 700;
  }

  .rating {
    margin-top: 0.8rem;

    display: flex;
    gap: 0.6rem;
  }

  img {
    width: 1.6rem;
    height: 1.6rem;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_400};

    height: 4rem;
    overflow: hidden;
  }

  footer {
    display: flex;
    gap: 0.8rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    > header h2 {
      font-size: 2rem;
    }
  }
`
