import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import './Custom.sass'

const getCustom = graphql`
  {
    file(name: { eq: "manpaint" }) {
      name
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Custom = () => {
  const data = useStaticQuery(getCustom)
  return (
    <section className="homeSectionContainer greyBG">
      <div className="homeSection">
        <div className="homeText">
          <p className="lead">
            Each of us are <span className="italic">unique,</span> why should
            our websites be any different{' '}
            <span className="coloredBlue punch">?</span>
          </p>
          <p>Custom built, bespoke websites. Tailor-made to your needs.</p>
          <p>
            No templates, no copies, 100%{' '}
            <span className="italic">original content</span>.
          </p>
          <Link className="link customLink" to="/about">
            Learn More
          </Link>
          <h2 className="coloredBlue">Custom.</h2>
        </div>

        <div className="homeImage">
          <Img
            alt={data.file.name}
            fluid={data.file.childImageSharp.fluid}
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Custom
