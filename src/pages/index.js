import React from 'react'

import { Layout } from '../layouts'
import { SEO, Hero, Custom, Speed, Projects } from '../components'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <main className="homeContainer">
        <Hero />
        <Custom />
        <Speed />
        <Projects />
      </main>
    </Layout>
  )
}
export default IndexPage
