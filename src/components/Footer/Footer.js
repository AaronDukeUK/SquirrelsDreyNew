import React from 'react'

import './Footer.sass'

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footerContact">
        <p>Want to work with me?</p>
        <a href="mailto:aaron@aaronduke.co.uk">
          <p className="bold largeText">BRIEF ME.</p>
        </a>
      </div>
      <div className="footerAddress">
        <p>70 The Street, Kings Lynn, PE32 2DR</p>
        <p>+44(0) 7435 236295</p>
        <p>aaron@aaronduke.co.uk</p>
      </div>
      <div className="footerlogo">AD</div>
    </footer>
  )
}

export default Footer
