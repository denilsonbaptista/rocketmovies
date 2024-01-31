import styled from "styled-components"

export const Container = styled.span`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: Roboto;
  font-size: 1.2rem;

  padding: 0.8rem 1.6rem;

  border-radius: 0.8rem;
  background-color: ${({ theme, isPreview }) =>
    isPreview ? theme.COLORS.BACKGROUND_500 : theme.COLORS.BACKGROUND_400};
`
