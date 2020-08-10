import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Img from 'gatsby-image/withIEPolyfill'

import { Layout } from '../layouts'
import { SEO } from '../components'

const getFound = graphql`
  {
    notes: file(name: { eq: "clover" }) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const NotFoundPage = () => {
  const data = useStaticQuery(getFound)
  return (
    <Layout>
      <SEO title="404: Not found" />
      <main className="aboutContainer">
        <section className="aboutSectionContainer greyBG">
          <div className="aboutSection">
            <div className="aboutText">
              <h2>NOT FOUND</h2>
              <p className="lead">
                You just hit a route that doesn&#39;t exist.
              </p>
              <p>Are you feeling Lucky?</p>
            </div>
            <div className="aboutImage">
              <Img
                alt={data.notes.name}
                fluid={data.notes.childImageSharp.fluid}
                objectFit="cover"
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default NotFoundPage
