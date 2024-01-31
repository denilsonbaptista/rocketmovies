import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1.6rem;
  border-radius: 1rem;

  background-color: ${({ theme, $isNew }) =>
    $isNew ? `transparent` : theme.COLORS.GRAY_700};

  border: ${({ theme, $isNew }) =>
    $isNew ? `1px dashed ${theme.COLORS.GRAY_300} ` : theme.COLORS.GRAY_700};

  > input {
    border: none;
    background: none;
  }

  > button {
    border: none;
    background: none;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`
