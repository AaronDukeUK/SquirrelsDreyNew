import React from 'react'

import Img from 'gatsby-image/withIEPolyfill'

import { Arrow } from '../index'

import './ProjectItem.sass'

const ProjectItem = props => {
  return (
    <div className="projectItem">
      <div className={`colorOverlay + ${props.bgClass}`}></div>
      <div className="projectOverlay">
        <p className="projectCategory">{props.category}</p>
        <p className="projectTitle">{props.title}</p>
        <div className="projectLead">
          <p>{props.lead}</p>
          <a href={props.link} target="_blank" rel="noreferrer">
            Visit Site
            <Arrow />
          </a>
        </div>
      </div>
      <Img
        className="projectImage"
        alt={props.alt}
        fluid={props.image}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
        objectFit="cover"
      />
    </div>
  )
}

export default ProjectItem
