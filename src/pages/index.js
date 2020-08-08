import React from 'react'

import { Layout } from '../layouts'
import { SEO, Hero, Custom, Speed, Projects, Footer } from '../components'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Custom />
      <Speed />
      <Projects />
    </Layout>
  )
}
export default IndexPage
