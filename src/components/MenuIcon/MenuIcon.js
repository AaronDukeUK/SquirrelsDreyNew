import React from 'react'
import { StyledMenuIcon } from './styles'

import './MenuIcon.sass'

const MenuIcon = ({ open, setOpen }) => {
  return (
    <StyledMenuIcon
      className="menuIconContainer"
      open={open}
      onClick={() => setOpen(!open)}
    >
      <div />
      <div />
      <div />
    </StyledMenuIcon>
  )
}

export default MenuIcon
