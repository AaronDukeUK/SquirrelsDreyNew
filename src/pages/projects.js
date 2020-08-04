import React from 'react'
import { Layout } from '../layouts'
import { SEO, Border } from '../components'

const ProjectsPage = () => (
  <>
    <SEO title="Projects" />
    <Layout>
      <Border />
      <div className="pageContainer">
        <section className="titleSection">
          <div className="pageTitle">
            <h1>Work.</h1>
          </div>
          <div className="pageDescription">
            <div className="descriptionText">
              <p className="bold">A selection of</p>
              <p className="italic">Latest Projects</p>
              <p className="smallText">
                Browse my latest projects, use the links to view them live or
                see the code.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  </>
)

export default ProjectsPage
