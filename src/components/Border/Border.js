import React, { useState } from 'react'
import { MenuIcon, Menu } from '../index'

import { StyledBorder } from './styles'

import './Border.sass'

const Border = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <StyledBorder className="border" open={open}></StyledBorder>
      <MenuIcon open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </>
  )
}

export default Border
