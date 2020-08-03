import React from 'react'

import { Link } from 'gatsby'

import { Facebook, Twitter, Github, Dribble } from '../index'

import './Social.sass'

const Social = () => {
  return (
    <div className="socialContainer">
      <Link to="/">
        <Dribble />
      </Link>
      <Link to="/">
        <Twitter />
      </Link>
      <Link to="/">
        <Facebook />
      </Link>
      <Link to="/">
        <Github />
      </Link>
      <div className="socialLine"></div>
    </div>
  )
}

export default Social
