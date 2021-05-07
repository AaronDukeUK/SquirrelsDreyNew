import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

import './Footer.sass'

const getFooter = graphql`
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

const Footer = () => {
  const data = useStaticQuery(getFooter)
  return (
    <footer className="footerContainer">
      <div className="contact">
        <p>Want to book a table?</p>
        <a href="tel:01760788101">
          <p className="bold largeText">CALL US.</p>
        </a>
      </div>
      <div className="address">
        <p>The Squirrels Drey</p>
        <p>The Street, Kings Lynn, PE32 2DR</p>
        <p>+44(0) 1760 788101</p>
      </div>
      <div className="logo">
        <Img
          alt={data.file.name}
          fluid={data.file.childImageSharp.fluid}
          objectFit="cover"
        />
      </div>
    </footer>
  )
}

export default Footer
