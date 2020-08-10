import styled from 'styled-components'

export const StyledMenuIcon = styled.button`
  left: ${({ open }) => (open ? '25px' : '25px')};
  &:focus {
    outline: none;
  }

  div {
    background: ${({ open }) => (open ? '#0a0a0a' : '#0a0a0a')};
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
