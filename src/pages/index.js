import React from 'react'

import { Layout } from '../layouts'
import { SEO, Hero, Sourced, Organic, Discount, Hours, XmasMenus, XmasHours } from '../components'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <main className="homeContainer">
        <Hero />
        <XmasHours />
        <Discount />
        <Sourced />
        <Organic />
        <Hours />
      </main>
    </Layout>
  )
}
export default IndexPage
