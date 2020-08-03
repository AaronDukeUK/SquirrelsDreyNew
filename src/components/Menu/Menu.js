import React from "react"
import { StyledMenu } from "./styles"
import { Link } from "gatsby"

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link exact to="/" activeClassName="active">
        Home
      </Link>
      <Link exact to="/" activeClassName="active">
        About
      </Link>
      <Link exact to="/" activeClassName="active">
        Products
      </Link>
      <Link exact to="/" activeClassName="active">
        Contact
      </Link>
    </StyledMenu>
  )
}
export default Menu
