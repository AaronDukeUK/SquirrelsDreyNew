import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

import { Layout } from '../layouts'
import { SEO, Hero, Custom, Speed, Projects, Footer } from '../components'

const getImages = graphql`
  {
    file(name: { eq: "pccolored" }) {
      name
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const IndexPage = () => {
  const data = useStaticQuery(getImages)
  return (
    <Layout>
      <SEO title="Home" />

      <Hero />
      <Custom />
      <Img
        className="Image"
        alt={data.file.name}
        fluid={data.file.childImageSharp.fluid}
        style={{
          position: 'relative',
          width: '100%',
          height: '40vh',
        }}
        objectFit="cover"
      />
      <Speed />
      <Projects />
      <div className="bottomMargin"></div>
      <Footer />
    </Layout>
  )
}
export default IndexPage
