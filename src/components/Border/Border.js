import React, { useState } from 'react'

import { MenuIcon, Menu } from '../index'

const Border = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="border"></div>
      <MenuIcon open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </>
  )
}

export default Border
