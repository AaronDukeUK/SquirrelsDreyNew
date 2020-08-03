import React from "react"
import { StyledMenuIcon } from "./styles"

const MenuIcon = ({ open, setOpen }) => {
  return (
    <StyledMenuIcon open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledMenuIcon>
  )
}

export default MenuIcon
