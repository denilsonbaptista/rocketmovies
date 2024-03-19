import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  width: 100%;

  display: grid;
  grid-template-rows: 14.4rem auto;
  grid-template-areas:
    'header'
    'content';

  > header {
    grid-area: header;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    > button {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      height: 100%;
      margin-left: 14.4rem;

      font-family: 'Roboto Slab';
      color: ${({ theme }) => theme.COLORS.PINK};
      background-color: transparent;
      border: none;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      > button {
        display: none;
      }
    }
  }
`

export const Form = styled.form`
  grid-area: content;
  justify-self: center;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  width: min(34rem, 90%);

  > div:nth-child(4) {
    margin-top: 2.4rem;
  }

  > button {
    margin-top: 2.4rem;
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: -8.4rem auto 6.4rem;

  height: 18.6rem;
  width: 18.6rem;

  > img {
    height: 18.6rem;
    width: 18.6rem;
    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    padding: 1.4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    cursor: pointer;

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.GRAY_700};
    }

    input {
      display: none;
    }
  }
`
