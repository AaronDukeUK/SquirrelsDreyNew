import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { ProjectItem } from '../index'

import './Projects.sass'

const getProjects = graphql`
  {
    fairy: file(name: { eq: "fairies" }) {
      name
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wood: file(name: { eq: "wood" }) {
      name
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sd: file(name: { eq: "squirrel" }) {
      name
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Projects = () => {
  const data = useStaticQuery(getProjects)
  return (
    <section className="homeContainer noPaddingBottom">
      <div className="homeSectionContainer greyBG">
        <div className="homeSection projects">
          <div className="projectsTextContainer">
            <h2 className="coloredOrange">Work.</h2>
            <p className="lead">
              Enough talk, lets look at some of{' '}
              <span className="italic">my work</span>
              <span className="coloredOrange"> .</span>
            </p>
          </div>
          <div className="projectItemsContainer">
            <ProjectItem
              alt={data.fairy.name}
              image={data.fairy.childImageSharp.fluid}
              category="E-commerce website"
              title="Fairies of Tranquility."
              lead="New E-commerce store for Handmade fairy products."
              bgClass="yellowBG"
            />
            <ProjectItem
              alt={data.wood.name}
              image={data.wood.childImageSharp.fluid}
              category="Brochure website"
              title="Wood Wizards."
              lead="Bespoke garden furnitue based in Norfolk, UK."
              bgClass="blueBG"
            />
            <ProjectItem
              alt={data.sd.name}
              image={data.sd.childImageSharp.fluid}
              category="Restaurant website"
              title="Squirrels Drey."
              lead="Fine Dining Restuarant, Locally Sourced Ingredients."
              bgClass="orangeBG"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
