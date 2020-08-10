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
        aria-label="Twiiter"
      >
        <Twitter />
      </a>
      <a
        href="https://www.facebook.com/AaronDukeUK"
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
      >
        <Facebook />
      </a>
      <a
        href="https://github.com/AaronDukeUK"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <Github />
      </a>
      <a
        href="https://www.instagram.com/aarondukeuk/"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
      >
        <Instagram />
      </a>
      <a
        href="https://dribbble.com/AaronDukeUK"
        target="_blank"
        rel="noreferrer"
        aria-label="Dribble"
      >
        <Dribble />
      </a>
    </div>
  )
}

export default Social
