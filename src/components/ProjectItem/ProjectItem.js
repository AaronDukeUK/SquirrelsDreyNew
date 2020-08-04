import React from 'react'

import Img from 'gatsby-image/withIEPolyfill'

const ProjectItem = props => {
  return (
    <div className="projectItem">
      <p>{props.category}</p>
      <p>{props.title}</p>
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
