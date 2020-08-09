import styled from 'styled-components'

export const StyledMenuIcon = styled.button`
  left: ${({ open }) => (open ? '35px' : '25px')};
  &:focus {
    outline: none;
  }

  div {
    background: ${({ open }) => (open ? '#3A5763' : 'black')};
    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`
