import styled from "styled-components"

export const Container = styled.section`
  > h2 {
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    font-size: 2rem;
    font-weight: 400;

    padding-bottom: 2.4rem;
  }
`
