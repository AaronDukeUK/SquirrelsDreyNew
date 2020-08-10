import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import { StyledMenu } from './styles'
import './Menu.sass'

const getMenu = graphql`
  {
    file(name: { eq: "logo" }) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Menu = ({ open }) => {
  const data = useStaticQuery(getMenu)
  return (
    <StyledMenu open={open} className="menuContainer">
      <div className="menuText greyBG">
        <div className="logo">
          <Img
            className="Image"
            alt={data.file.name}
            fluid={data.file.childImageSharp.fluid}
            objectFit="cover"
          />
        </div>
        <div className="menuLinks">
          <Link className="customLink" to="/" activeClassName="activeLink">
            Home
          </Link>
          <Link className="speedLink" to="/about" activeClassName="activeLink">
            About
          </Link>
        </div>
        <div className="address">
          <p>70 The Street, Kings Lynn, PE32 2DR</p>
          <p>+44(0) 7435 236295</p>
          <p>hello@aaronduke.co.uk</p>
        </div>
        <div className="contact">
          <p>Want to work with me?</p>
          <a href="mailto:hello@aaronduke.co.uk">
            <p className="bold largeText">BRIEF ME.</p>
          </a>
        </div>
      </div>
      <div className="menuPanel"></div>
    </StyledMenu>
  )
}
export default Menu
