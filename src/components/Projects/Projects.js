import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { ProjectItem } from '../index'

import './Projects.sass'

const getProjects = graphql`
  {
    fairy: file(name: { eq: "fairies" }) {
      name
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wood: file(name: { eq: "wood" }) {
      name
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sd: file(name: { eq: "squirrel" }) {
      name
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Projects = () => {
  const data = useStaticQuery(getProjects)
  return (
    <>
      <section className="homeContainer noPaddingBottom">
        <div className="homeSectionContainer greyBG projectsContainer">
          <div className="homeSection projects">
            <div className="projectsTextContainer">
              <h2 className="coloredOrange">Work.</h2>
              <p className="lead">
                Enough talk, lets look at some of{' '}
                <span className="italic">my work</span>
                <span className="coloredOrange punch">.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="projectItemsContainer greyBG">
        <ProjectItem
          alt={data.fairy.name}
          image={data.fairy.childImageSharp.fluid}
          category="E-commerce website"
          title="Fairies of Tranquility"
          lead="Handmade Fairy Products."
          link="https://fairiesoftranquility.netlify.app/"
          bgClass="yellowBG"
        />

        <ProjectItem
          alt={data.wood.name}
          image={data.wood.childImageSharp.fluid}
          category="Brochure website"
          title="Wood Wizards"
          lead="Bespoke Garden Furniture."
          link="https://wood-wizards.netlify.app/"
          bgClass="blueBG"
        />

        <ProjectItem
          alt={data.sd.name}
          image={data.sd.childImageSharp.fluid}
          category="Restaurant website"
          title="Squirrels Drey"
          lead="Fine Dining Restuarant."
          link="https://www.squirrelsdrey.co.uk/"
          bgClass="orangeBG"
        />
      </div>
    </>
  )
}

export default Projects
