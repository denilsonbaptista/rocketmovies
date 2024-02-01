import styled from "styled-components"

export const Container = styled.button`
  font-weight: 500;

  width: 100%;
  background-color: ${({ theme, $isDelete }) =>
    $isDelete ? theme.COLORS.BACKGROUND_600 : theme.COLORS.PINK};
  color: ${({ theme, $isDelete }) =>
    $isDelete ? theme.COLORS.PINK : theme.COLORS.BACKGROUND_400};

  height: 5.6rem;

  border: none;
  border-radius: 1rem;
`
