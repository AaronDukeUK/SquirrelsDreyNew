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
    <section className="homeSectionContainer">
      <div className="homeSection">
        <div className="homeImage">
          <Img
            className="Image"
            alt={data.file.name}
            fluid={data.file.childImageSharp.fluid}
            objectFit="cover"
          />
        </div>

        <div className="homeText">
          <p className="lead">
            Mobile browsing <span className="italic">dominates</span> todays
            world <span className="coloredYellow">.</span>
          </p>
          <p>
            Generating <span className="italic">blazing-fast</span> websites,
            suited to todays needs.
          </p>
          <p>
            Fully optimised, <span className="italic">handcrafted</span> code to
            meet any devices needs.
          </p>
          <Link className="link speedLink" to="/about">
            Learn More
          </Link>
          <h2 className="coloredYellow">Speed.</h2>
        </div>
      </div>
    </section>
  )
}

export default Speed
