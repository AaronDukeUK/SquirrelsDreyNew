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
    <div className="customContainer">
      <div className="customTextContainer">
        <div className="customText">
          <p className="lead">
            Each of us are <span className="italic">unique</span>, why should
            our websites be any different <span className="colored">?</span>
          </p>
          <p>Custom built, bespoke websites. Tailor-made to your needs.</p>
          <p>
            No templates, no copies, 100%{' '}
            <span className="italic">original content</span>.
          </p>
          <Link className="textLink" to="/">
            Learn More
          </Link>
        </div>
        <h2>Custom.</h2>
      </div>
      <Img
        className="Image"
        alt={data.file.name}
        fluid={data.file.childImageSharp.fluid}
        style={{
          position: 'relative',
          width: '50%',
          height: '600px',
        }}
        objectFit="cover"
      />
    </div>
  )
}

export default Custom
