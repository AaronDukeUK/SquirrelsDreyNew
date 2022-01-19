import React, { useState } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import VizSensor from 'react-visibility-sensor'
import { Fade } from '@material-ui/core'
import Img from 'gatsby-image/withIEPolyfill'
import './Organic.sass'

const getOrganic = graphql`
  {
    file(name: { eq: "allotment" }) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Organic = () => {
  const data = useStaticQuery(getOrganic)
  let [active, setActive] = useState(false)
  return (
    <section className="homeSectionContainer">
      <VizSensor
        onChange={isVisible => {
          setActive(isVisible)
        }}
        partialVisibility
      >
        <div className="homeSection speed">
          <Fade in={active} timeout={3000}>
            <div className="homeImage">
              <Img
                className="Image"
                alt={data.file.name}
                fluid={data.file.childImageSharp.fluid}
                objectFit="cover"
              />
            </div>
          </Fade>

          <div className="homeText">
            <p className="lead">
              Our very own <span className="italic">Allotment</span> provides the ingredients on your plate.
            </p>
            <p>
              Situated just a few <span className="italic">miles away</span>. Organic, fresh produce.
            </p>
            <Link className="link organicLink" to="/menu">
              Is there a dish which suits you?
            </Link>
            <h2 className="coloredOrange">Organic.</h2>
          </div>
        </div>
      </VizSensor>
    </section>
  )
}

export default Organic
