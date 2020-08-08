import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

import { Layout } from '../layouts'

const getAbout = graphql`
  {
    compass: file(name: { eq: "compass" }) {
      name
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pc: file(name: { eq: "aboutpc" }) {
      name
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = () => {
  const data = useStaticQuery(getAbout)
  return (
    <Layout>
      <main className="pageContainer">
        <section className="pageTextContainer grey">
          <h2 className="sectionTitle coloredOrange">About.</h2>
          <div className="pageSection sectionText">
            <p className="lead">
              Helping <span className="italic">entrepreneurs</span> of all
              buisinesses achieve their dreams online{' '}
              <span className="coloredOrange">.</span>
            </p>
            <p>
              Beginning a new venture online is never easy. Worring about
              building and running a website is part of that concern.
            </p>
            <p>
              Let me help you achieve your dreams online, so you can focus on
              growing your business and balancing your workload effiently.
            </p>
          </div>
        </section>
        <div className="pageImageContainer white">
          <Img
            className="Image top"
            alt={data.compass.name}
            fluid={data.compass.childImageSharp.fluid}
            objectFit="cover"
          />
        </div>
        <section className="pageTextContainer padandMargin white">
          <div className="pageSection sectionText">
            <p className="lead">
              Growing <span className="italic">businesses</span> and communities{' '}
              <span className="coloredOrange">.</span>
            </p>
            <p>
              Understanding one another helps build a lasting relationship
              whilst achieving great results.
            </p>
          </div>
          <div className="pageListing">
            <div className="pageListingSection">
              <p>Visual Design, UX / UI</p>

              <p>
                Designs that look good are never enough. I focus on customer
                interaction, ease of navigation, efficient code structure and
                brand identity.
              </p>
            </div>
            <div className="pageListingSection">
              <p>Search Engine Optimisation (SEO)</p>
              <p>
                I help websites rank well on Google searches by optimizing every
                pixel for performance, speed and mobile friendliness.
              </p>
            </div>
            <div className="pageListingSection">
              <p>Training & Development</p>
              <p>
                Completing the website is only part of the solution. I help you
                every step of the way to get going online, with continual
                training and development.
              </p>
            </div>
          </div>
        </section>
        <div className="pageImageContainer largeImage">
          <Img
            className="Image"
            alt={data.pc.name}
            fluid={data.pc.childImageSharp.fluid}
            objectFit="cover"
          />
        </div>
      </main>
    </Layout>
  )
}

export default About
