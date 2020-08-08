import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import './Speed.sass'

const getSpeed = graphql`
  {
    file(name: { eq: "speed" }) {
      name
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Speed = () => {
  const data = useStaticQuery(getSpeed)
  return (
    <div className="sectionContainer white">
      <div className="sectionImageContainer">
        <div className="sectionImageBG orange left"></div>
        <Img
          className="Image"
          alt={data.file.name}
          fluid={data.file.childImageSharp.fluid}
          objectFit="cover"
        />
      </div>
      <div className="sectionTextContainer">
        <div className="sectionText">
          <p className="lead">
            Mobile browsing <span className="italic">dominates</span> todays
            world <span className="coloredOrange">.</span>
          </p>
          <p>
            Generating <span className="italic">blazing-fast</span> websites,
            suited to todays needs.
          </p>
          <p>
            Fully optimised, <span className="italic">handcrafted</span> code to
            meet any devices needs.
          </p>
          <Link className="textLink" to="/about">
            Learn More
          </Link>
        </div>
        <h2 className="sectionTitle coloredOrange">Speed.</h2>
      </div>
    </div>
  )
}

export default Speed
