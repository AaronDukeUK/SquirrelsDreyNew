import React from 'react'

import { Facebook, Twitter, Github, Dribble, Instagram } from '../index'

import './Social.sass'

const Social = () => {
  return (
    <div className="socialContainer">
      <div className="socialLine"></div>
      <a
        href="https://twitter.com/AaronDukeUK"
        target="_blank"
        rel="noreferrer"
      >
        <Twitter />
      </a>
      <a
        href="https://www.facebook.com/AaronDukeUK"
        target="_blank"
        rel="noreferrer"
      >
        <Facebook />
      </a>
      <a href="https://github.com/AaronDukeUK" target="_blank" rel="noreferrer">
        <Github />
      </a>
      <a
        href="https://www.instagram.com/aarondukeuk/"
        target="_blank"
        rel="noreferrer"
      >
        <Instagram />
      </a>
      <a
        href="https://dribbble.com/AaronDukeUK"
        target="_blank"
        rel="noreferrer"
      >
        <Dribble />
      </a>
    </div>
  )
}

export default Social
