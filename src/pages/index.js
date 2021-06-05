import React from 'react'

import { Layout } from '../layouts'
import { SEO, Hero, Sourced, Organic, Discount, Pudding } from '../components'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <main className="homeContainer">
        <Hero />
        <Discount />
        <Sourced />
        <Organic />
        <Pudding />
      </main>
    </Layout>
  )
}
export default IndexPage
