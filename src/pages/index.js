import React from 'react'
import { Layout } from '../layouts'
import { SEO, Border, Hero } from '../components'

const IndexPage = () => (
  <>
    <SEO title="Home" />

    <Layout>
      <Border />
      <div className="outerWrapper">
        <div className="wrapper">
          <Hero />
          <Hero />
          <Hero />
          <Hero />
        </div>
      </div>
    </Layout>
  </>
)

export default IndexPage
