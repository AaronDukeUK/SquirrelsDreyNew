import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

import './Footer.sass'

const getFooter = graphql`
  {
    file(name: { eq: "logo" }) {
      name
      childImageSharp {
        fluid(maxWidth: 200) {
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
        <p>Want to work with me?</p>
        <a href="mailto:hello@aaronduke.co.uk">
          <p className="bold largeText">BRIEF ME.</p>
        </a>
      </div>
      <div className="address">
        <p>70 The Street, Kings Lynn, PE32 2DR</p>
        <p>+44(0) 7435 236295</p>
        <p>hello@aaronduke.co.uk</p>
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
