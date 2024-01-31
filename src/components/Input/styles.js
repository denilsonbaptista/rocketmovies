import styled from "styled-components"

export const Container = styled.div`
  flex: 1;
  display: flex;
  gap: 1.2rem;

  padding: 1.9rem 1.6rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  svg {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  > input,
  &:placeholder {
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  > input {
    width: 100%;

    background: transparent;
    border: none;

    color: ${({ theme }) => theme.COLORS.WHITE_100};

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    border: 0;
    background: transparent;
  }
`
