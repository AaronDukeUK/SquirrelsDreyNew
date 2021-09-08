import React, { useState } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import VizSensor from 'react-visibility-sensor'
import { Fade } from '@material-ui/core'
import Img from 'gatsby-image/withIEPolyfill'
import './XmasMenus.sass'

import decmenu from '../../files/decmenu.pdf';
import xmasmenu from '../../files/xmasmenu.pdf';

const getXmasMenus = graphql`
  {
    file(name: { eq: "xmasmenu" }) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const XmasMenus = () => {
  const data = useStaticQuery(getXmasMenus)
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
              Our December & Christmas Day <span className="italic">menus</span> are now available.
            </p>
            <p>
              <Link className="link menuLink">
                <a href={decmenu} download>December Menu</a>
              </Link>
            </p>
            <p>
              <Link className="link menuLink">
                <a href={xmasmenu} download>Christmas Day Menu</a>
              </Link>
            </p>
            <h2 className="coloredOrange">DECEMBER.</h2>
          </div>
        </div>
      </VizSensor>
    </section>
  )
}

export default XmasMenus
