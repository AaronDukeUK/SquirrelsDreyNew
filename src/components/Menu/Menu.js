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
          <Link className="speedLink" to="/menu" activeClassName="activeLink">
            Menu
          </Link>
        </div>
        <div className="address">
          <p>The Squirrels Drey</p>
          <p>The Street, Kings Lynn, PE32 2DR</p>
          <p>+44(0) 1760 788101</p>
        </div>
        <div className="contact">
          <p>Want to book a table?</p>
          <a href="tel:01760788101">
            <p className="bold largeText">CALL US.</p>
          </a>
        </div>
      </div>
      <div className="menuPanel"></div>
    </StyledMenu>
  )
}
export default Menu
