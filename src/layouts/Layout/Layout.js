import React from 'react'
import 'typeface-titillium-web'
import 'typeface-montserrat'

import { Border } from '../../components'

import '../reset.sass'
import './Layout.sass'

const Layout = ({ children }) => {
  return (
    <>
      <Border />
      {children}
    </>
  )
}

export default Layout
