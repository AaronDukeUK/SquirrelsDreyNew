import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import './Speed.sass'

const getSpeed = graphql`
  {
    file(name: { eq: "speed" }) {
      name
      childImageSharp {
        fluid {
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
      <div className="homeSection speed">
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
            world <span className="coloredYellow punch">.</span>
          </p>
          <p>
            Generating <span className="italic">blazing-fast</span> websites,
            suited to any needs.
          </p>
          <p>
            Fully optimized, <span className="italic">handcrafted</span> code
            with speed and security in mind.
          </p>
          <Link className="link speedLink" to="/about">
            How are my websites optimized?
          </Link>
          <h2 className="coloredYellow">Speed.</h2>
        </div>
      </div>
    </section>
  )
}

export default Speed
