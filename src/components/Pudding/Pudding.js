import React, { useState } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import VizSensor from 'react-visibility-sensor'
import { Fade } from '@material-ui/core'
import Img from 'gatsby-image/withIEPolyfill'
import './Pudding.sass'

import PUD from '../../files/PUD.pdf';

const getPudding = graphql`
  {
    file(name: { eq: "icecream" }) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Pudding = () => {
  const data = useStaticQuery(getPudding)
  let [active, setActive] = useState(false)
  return (
    <section className="homeSectionContainer">
      <VizSensor
        onChange={isVisible => {
          setActive(isVisible)
        }}
        partialVisibility
      >
        <div className="homeSection">
          <div className="homeText">
            <p className="lead">
              Once a <span className="italic">month</span> we hold our very own pudding club
              <span className="coloredOrange punch">.</span>
            </p>
            <p>A platter of handmade desserts along with a specially selected main course.</p>
            <p>
              Last <span className="italic">Friday</span> of every month.
            </p>
            <Link className="link puddingLink">
              <a href={PUD} download>
                Download Menu
              </a>
            </Link>
            <h2 className="coloredOrange">Pudding.</h2>
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

export default Pudding
