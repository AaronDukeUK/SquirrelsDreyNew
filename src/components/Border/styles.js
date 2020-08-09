import styled from 'styled-components'

export const StyledBorder = styled.div`
  transition: 0.5s ease-in-out;
  border: ${({ open }) => (open ? '100px solid #fff' : '40px solid #fff')};
`
