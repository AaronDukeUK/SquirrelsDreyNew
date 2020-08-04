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
    <div className="speedContainer">
      <div className="speedLeftContainer">
        <h2>Speed.</h2>
        <Img
          className="Image"
          alt={data.file.name}
          fluid={data.file.childImageSharp.fluid}
          style={{
            position: 'relative',
            width: '600px',
            height: '400px',
          }}
          objectFit="cover"
        />
      </div>

      <div className="speedTextContainer">
        <div className="speedText">
          <p className="lead">
            Mobile browsing <span className="italic">dominates</span> todays
            world <span className="colored">.</span>
          </p>
          <p>
            Generating <span className="italic">blazing-fast</span> websites,
            suited to todays needs.
          </p>
          <p>
            Fully optimised, <span className="italic">handcrafted</span> code to
            meet any devices needs.
          </p>
          <Link to="/">Learn More</Link>
        </div>
      </div>
    </div>
  )
}

export default Speed
