import React from 'react'
import { Link } from 'gatsby'

import { Mobile } from '../index'

const Projects = () => {
  return (
    <div className="container projects">
      <Mobile />
      <div className="projectsText">
        <h2>Projects</h2>
        <p>Enough talk, lets look at my work.</p>
        <Link to="/projects" className="button">
          Show Me!
        </Link>
      </div>
    </div>
  )
}

export default Projects
