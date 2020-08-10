import React, { useState } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import VizSensor from 'react-visibility-sensor'
import { Fade, Slide } from '@material-ui/core'
import Img from 'gatsby-image/withIEPolyfill'
import './Custom.sass'

const getCustom = graphql`
  {
    file(name: { eq: "manpaint" }) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Custom = () => {
  const data = useStaticQuery(getCustom)
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
          <Slide in={active} direction="right" timeout={1500}>
            <div className="homeText">
              <p className="lead">
                Each of us are <span className="italic">unique,</span> why
                should our websites be any different{' '}
                <span className="coloredBlue punch">?</span>
              </p>
              <p>Custom built, bespoke websites. Tailor-made to your needs.</p>
              <p>
                No templates, no copies, 100%{' '}
                <span className="italic">original content</span>.
              </p>
              <Link className="link customLink" to="/about">
                How are my websites unique?
              </Link>
              <h2 className="coloredBlue">Custom.</h2>
            </div>
          </Slide>
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

export default Custom
