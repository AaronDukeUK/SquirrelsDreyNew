import React from 'react'
import { Layout } from '../layouts'
import {
  SEO,
  Border,
  Hero,
  Unique,
  Speed,
  Projects,
  Contact,
} from '../components'

const IndexPage = () => (
  <>
    <SEO title="Home" />

    <Layout>
      <Border />
      <div className="outerWrapper">
        <div className="wrapper">
          <Hero />
          <Unique />
          <Speed />
          <Projects />
          <Contact />
        </div>
      </div>
    </Layout>
  </>
)

export default IndexPage
