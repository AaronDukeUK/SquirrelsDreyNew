import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import VizSensor from 'react-visibility-sensor'
import { Fade } from '@material-ui/core'
import Img from 'gatsby-image/withIEPolyfill'
import './Discount.sass'

const getDiscount = graphql`
  {
    file(name: { eq: "profit" }) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Discount = () => {
  const data = useStaticQuery(getDiscount)
  let [active, setActive] = useState(false)
  return (
    <section className="homeSectionContainer greyBG">
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
              Our Midweek <span className="italic">Discount</span> every Wednesday and Thursday.
            </p>
            <p>
              15% off when <span className="italic">dining</span>.
            </p>
            <p>
              Terms & Conditions apply.
            </p>
            <h2 className="coloredOrange">MIDWEEK.</h2>
          </div>
        </div>
      </VizSensor>
    </section>
  )
}

export default Discount
