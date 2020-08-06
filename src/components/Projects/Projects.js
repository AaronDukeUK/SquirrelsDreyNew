import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import { ProjectItem } from '../index'

import './Projects.sass'

const getProjects = graphql`
  {
    fairy: file(name: { eq: "fairies" }) {
      name
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wood: file(name: { eq: "wood" }) {
      name
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Projects = () => {
  const data = useStaticQuery(getProjects)
  return (
    <div className="projectsContainer">
      <div className="projectsTextContainer">
        <h2>Projects.</h2>
        <p className="lead">
          Enough talk, lets look at <span className="italic">my work</span>.
        </p>
      </div>
      <div className="projectItemsContainer">
        <ProjectItem
          alt={data.fairy.name}
          image={data.fairy.childImageSharp.fluid}
          category="E-commerce website"
          title="Fairies of Tranquility."
          lead="New E-commerce store for Handmade fairy products."
        />
        <ProjectItem
          alt={data.wood.name}
          image={data.wood.childImageSharp.fluid}
          category="Brochure website"
          title="Wood Wizards."
        />
        <ProjectItem
          alt={data.wood.name}
          image={data.wood.childImageSharp.fluid}
          category="E-commerce website"
          title="Fairies of Tranquility."
        />
      </div>
    </div>
  )
}

export default Projects
