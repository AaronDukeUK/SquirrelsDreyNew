import React from 'react'
import { StyledMenu } from './styles'
import { Link } from 'gatsby'

import './Menu.sass'

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open} className="menuContainer">
      <div className="menuText">
        <div className="footerlogo">AD</div>
        <div className="footerAddress">
          <p>70 The Street, Kings Lynn, PE32 2DR</p>
          <p>+44(0) 7435 236295</p>
          <p>aaron@aaronduke.co.uk</p>
        </div>
        <div className="footerContact">
          <p>Want to work with me?</p>
          <a href="mailto:aaron@aaronduke.co.uk">
            <p className="bold largeText">BRIEF ME.</p>
          </a>
        </div>
      </div>
      <div className="menuPanel"></div>
    </StyledMenu>
  )
}
export default Menu
