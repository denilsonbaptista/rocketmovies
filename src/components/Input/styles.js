import styled from "styled-components"

export const Container = styled.div`
  flex: 1;

  padding: 1.9rem 2.4rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

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
`
