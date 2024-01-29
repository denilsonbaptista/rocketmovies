import styled from "styled-components"

export const Container = styled.textarea`
  padding: 1.9rem 1.6rem;

  height: 27.4rem;
  width: 100%;

  resize: none;
  border: none;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`
