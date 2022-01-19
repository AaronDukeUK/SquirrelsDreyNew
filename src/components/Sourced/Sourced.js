import React, { useState } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import VizSensor from 'react-visibility-sensor'
import { Fade } from '@material-ui/core'
import Img from 'gatsby-image/withIEPolyfill'
import './Sourced.sass'

const getSourced = graphql`
  {
    file(name: { eq: "shortbreads" }) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Sourced = () => {
  const data = useStaticQuery(getSourced)
  let [active, setActive] = useState(false)
  return (
    <section className="homeSectionContainer greyBG">
      <VizSensor
        onChange={isVisible => {
          setActive(isVisible)
        }}
        partialVisibility
      >
        <div className="homeSection">
          <div className="homeText">
            <p className="lead">
              We take <span className="italic">pride</span> in what we do.
              Locally-sourced ingredients.
            </p>
            <p>All of our meals are freshly prepared on a daily basis.</p>
            <p>
              Relaxed, <span className="italic">sociable</span> & friendly.
            </p>
            <Link className="link sourcedLink" to="/menu">
              Looking for the menu?
            </Link>
            <h2 className="coloredOrange">Locally Sourced.</h2>
          </div>

          <Fade in={active} timeout={3000}>
            <div className="homeImage">
              <Img
                alt={data.file.name}
                fluid={data.file.childImageSharp.fluid}
                objectFit="cover"
              />
            </div>
          </Fade>
        </div>
      </VizSensor>
    </section>
  )
}

export default Sourced
