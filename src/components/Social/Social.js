import React from 'react'

import { Facebook } from '../index'

import './Social.sass'

const Social = () => {
  return (
    <div className="socialContainer">
      <div className="socialLine"></div>
      <a
        href="https://www.facebook.com/TheSquirrelsDrey"
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
      >
        <Facebook />
      </a>
    </div>
  )
}

export default Social
