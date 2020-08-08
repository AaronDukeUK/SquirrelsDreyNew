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
    <div className="sectionContainer grey">
      <div className="sectionTextContainer">
        <div className="sectionText">
          <p className="lead">
            Each of us are <span className="italic">unique</span>, why should
            our websites be any different <span className="coloredBlue">?</span>
          </p>
          <p>Custom built, bespoke websites. Tailor-made to your needs.</p>
          <p>
            No templates, no copies, 100%{' '}
            <span className="italic">original content</span>.
          </p>
          <Link className="textLink" to="/about">
            Learn More
          </Link>
        </div>
        <h2 className="sectionTitle coloredBlue">Custom.</h2>
      </div>
      <div className="sectionImageContainer">
        <div className="sectionImageBG blue right"></div>
        <Img
          className="Image"
          alt={data.file.name}
          fluid={data.file.childImageSharp.fluid}
          objectFit="cover"
        />
      </div>
    </div>
  )
}

export default Custom
