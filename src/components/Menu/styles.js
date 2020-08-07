import styled from 'styled-components'

export const StyledMenu = styled.nav`
  transition: transform 0.5s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
`
